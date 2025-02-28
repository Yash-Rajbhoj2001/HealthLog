import Toast from 'react-bootstrap/Toast';


function NotificationToast({ showToast, setShowToast }) {
  return (
    <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 9999, // Ensures it appears on top
            }}
        >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body>Patient Added Successfully</Toast.Body>
    </Toast>
  );
}

export default NotificationToast;