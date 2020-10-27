import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DonationForm from './components/DonationForm';
import Landing from './components/Landing'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Report from './components/Report';
function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email) {
      setUser(user)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <div className='d-flex flex-column justify-content-between min-vh-100'>
      <Router>
        <Navbar user={[user, setUser]}></Navbar>
        <section id='main-content'>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/login' component={() => <Login user={setUser} />} />
            <Route path='/register' component={() => <Register user={setUser} />} />
            <Route path='/donate' component={DonationForm} />
            <Route path='/report' component={Report} />
          </Switch>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
