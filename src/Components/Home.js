import '../App.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-information-div">
          <motion.span 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            style={{ fontWeight: 'bold', fontSize: '22px' }}
          >
            Welcome to
            <span style={{ fontWeight: 'bold', color: '#03045e', fontSize: '25px', marginLeft: '5px' }}>
              HealthLog
            </span> 
            - Your Digital Healthcare Companion
          </motion.span>

          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ marginLeft: '20px', fontSize: '20px', marginTop: '10px', fontWeight: 'bold' }}
          >
            Simplifying Healthcare, One Click at a Time
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            At HealthLog, we bridge the gap between doctors and patients, making healthcare management seamless and efficient.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Whether you need to book an appointment, store medical records, or consult with a specialist, HealthLog is your go-to digital health assistant.
          </motion.p>

          <motion.div 
            className="action-buttons" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="primary-btn">Create Account</button>
            <button className="secondary-btn">Get Appointment</button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;