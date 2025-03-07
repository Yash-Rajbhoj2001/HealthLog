import logo from './logo.svg';
import './App.css';
import { HashRouter,Router,Route,Link, Routes } from 'react-router-dom';
import Account from './Components/Account';
import DoctorHome from './Components/DoctorHome';
import PatientHome from './Components/PatientHome';
import AppointmentPage from './Components/AppointmentPage';
import Home from './Components/Home';

function App() {
  return (
  <>
    <header>
      <div className='logo-div'>
        <img src={logo} className='App-logo' alt='logo'/>
        <h1>React App</h1>
      </div>
      <div className='nav-div'>
        <Link to='/'><i class="fa-solid fa-house" style={{color: '#ffffff',marginRight:'5px'}}></i>Home</Link>
        <Link to='/Account'><i class="fa-solid fa-user" style={{color: '#ffffff',marginRight:'5px'}}></i>Account</Link>
        <Link to='/bookappointment'><i class="fa-solid fa-calendar-check" style={{color: '#ffffff',marginRight:'5px'}}></i>Book Appointment</Link>
        <Link to='/Account'><i class="fa-solid fa-calendar-check" style={{color: '#ffffff',marginRight:'5px'}}></i>Search Doctor</Link>
        <Link to='/Account'><i class="fa-solid fa-phone" style={{color: '#ffffff',marginRight:'5px'}}></i>Contact</Link>
      </div>
    </header>
    <Routes>
      <Route path='/account' element={<Account/> }/>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/DoctorPanel' element={<DoctorHome/>}></Route>
      <Route path='/PatientPanel' element={<PatientHome/>}></Route>
      <Route path='/bookappointment' element={<AppointmentPage/>}></Route>
    </Routes>
  </>
  );
}

export default App;
