const http = require("http");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const multer = require("multer");
const admin = require("firebase-admin");

// Initialize Firebase
const serviceAccount = require("./firebase-config.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Replace with your Firebase DB URL
});

const db = admin.database();

// Google Drive API setup
const credentials = require("./credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive.file"];
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});
const drive = google.drive({ version: "v3", auth });

// Multer for file upload
const upload = multer({ dest: "uploads/" });

// Function to upload file to Google Drive
async function uploadFileToDrive(filePath, fileName) {
  try {
    const fileMetadata = {
      name: fileName,
      parents: ["1HNw8smuzYRKWCYLswmyWu120OWBmP1N0"], // Replace with your Drive Folder ID
    };

    const media = {
      mimeType: "application/pdf",
      body: fs.createReadStream(filePath),
    };

    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink",
    });

    console.log("File uploaded:", file.data.webViewLink);
    return file.data.webViewLink;
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
}

// Create an HTTP server to handle form submission
http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("File upload error");
        return;
      }

      const { note, doctorID, patientID, date, treatmentOn } = req.headers;
      const filePath = req.file.path;
      const fileName = req.file.originalname;

      try {
        const fileLink = await uploadFileToDrive(filePath, fileName);

        const appointmentRef = db.ref("Appointment").push();
        await appointmentRef.set({
          Note: note,
          doctorID: doctorID,
          patientID: patientID,
          date: date,
          treatmentOn: treatmentOn,
          file: fileLink,
        });

        fs.unlinkSync(filePath); // Remove temp file
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, link: fileLink }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error saving data");
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(5000, () => console.log("Server running on port 5000"));
