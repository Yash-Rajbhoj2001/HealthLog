const http = require("http");
const url = require("url");
const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = twilio(accountSid, authToken);

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let body = "";

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", async () => {
        res.setHeader("Content-Type", "application/json");

        try {
            const requestData = JSON.parse(body);
            let { phone } = requestData;

            // ✅ Ensure phone number is in E.164 format
            if (!phone.startsWith("+")) {
                phone = `+91${phone}`; // Change `+91` to your country code
            }

            if (parsedUrl.pathname === "/send-otp" && req.method === "POST") {
                console.log("Sending OTP to:", phone);

                const verification = await client.verify.v2
                    .services(verifyServiceSid)
                    .verifications.create({ to: phone, channel: "sms" });

                res.writeHead(200);
                return res.end(JSON.stringify({ success: true, status: verification.status }));
            }

            if (parsedUrl.pathname === "/verify-otp" && req.method === "POST") {
                console.log("Verifying OTP for:", phone);

                const verificationCheck = await client.verify.v2
                    .services(verifyServiceSid)
                    .verificationChecks.create({ to: phone, code: requestData.code });

                res.writeHead(200);
                return res.end(JSON.stringify({ success: verificationCheck.status === "approved" }));
            }

            res.writeHead(404);
            return res.end(JSON.stringify({ error: "Invalid route" }));
        } catch (error) {
            console.error("Error:", error.message);
            res.writeHead(500);
            return res.end(JSON.stringify({ error: error.message }));
        }
    });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
