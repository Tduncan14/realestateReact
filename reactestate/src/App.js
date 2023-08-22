
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path ='/Profile' element={<Profile/>} />
      <Route path='/Sign-up' element={<Signup />} />
      <Route path ='/Sign-in' element={<SignIn />} />
      <Route path ='/offers' element={<Offers/>}/>
      <Route path='/offers/:id'></Route>
      <Route path = '/forgot-password' element={<ForgotPassword />} />
      
 
      </Routes>
    </Router>
  );
}

export default App;
