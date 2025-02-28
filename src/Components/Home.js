import { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="hero-banner">
        <div className="hero-information-div">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            style={{ fontWeight: 'bold', fontSize: '32px', color: '#0c2e8a' }}
          >
            WELCOME TO MEDILOG
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}
          >
            A seamless and efficient platform for managing medical data, ensuring accuracy, security, and easy access.
          </motion.p>

          {/* Feature Cards Container */}
          <div className="features-container">
            
            {/* First Card - Learn More Feature */}
            <motion.div 
              className="feature-box blue-box"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2>Why Choose MediLog?</h2>
              <p>MediLog simplifies medical data management, enhances patient record-keeping, and ensures real-time access to critical information.</p>
              <button 
                className="learn-more-btn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>

              {showMore && (
                <motion.div 
                  className="extra-content"
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: "auto" }} 
                  transition={{ duration: 0.5 }}
                >
                  <p>
                    MediLog is built with cutting-edge technology, ensuring secure and streamlined access to medical data. Our cloud-based infrastructure enables healthcare professionals to manage, store, and analyze patient records efficiently.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Second Card */}
            <motion.div 
              className="feature-box transparent-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="icon">📊</span>
              <h3>Data-Driven Insights</h3>
              <p>Analyze trends and generate reports to improve decision-making in medical operations and patient care.</p>
            </motion.div>

            {/* Third Card */}
            <motion.div 
              className="feature-box transparent-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="icon">🔒</span>
              <h3>Secure & Compliant</h3>
              <p>Ensuring data privacy and compliance with healthcare regulations through advanced encryption.</p>
            </motion.div>

            {/* Fourth Card */}
            <motion.div 
              className="feature-box transparent-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="icon">⏳</span>
              <h3>Efficient Record Management</h3>
              <p>Quick access to medical records, prescriptions, and reports, reducing paperwork and saving time.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
