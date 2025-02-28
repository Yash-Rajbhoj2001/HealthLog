import '../App.css'

const Home = () => {
  return (
    <>
      <div className='hero-banner'>
        <div className='hero-information-div'>
          <span style={{fontWeight:'bold',margin:'',fontSize:'22px'}}>Welcome to<span style={{fontWeight:'bold',color:'#03045e',margin:'5px',fontSize:'25px'}}>HealthLog</span>-Your Digital Healthcare Companion</span>
          <p style={{marginLeft:'20px',fontSize:'20px',marginTop:'10px',fontWeight:'bold'}}>Simplifying Healthcare, One Click at a Time</p>
          <p>At HealthLog, we bridge the gap between doctors and patients, making healthcare management seamless and efficient. </p>
          <p>Whether you need to book an appointment, store medical records, or consult with a specialist, HealthLog is your go-to digital health assistant.</p>
          <div className='action-buttons'>
            <button>Create Account</button>
            <button>Get Appointment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home