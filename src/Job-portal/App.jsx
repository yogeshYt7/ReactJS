import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Job-portal/Home';
import Login from '../Job-portal/Login';
import Signup from '../Job-portal/Signup';
import JobList from '../Job-portal/JobList';
import JobDetails from '../Job-portal/JobDeatails';
import JobApplication from '../Job-portal/JobApplication';
import NotFound from '../Job-portal/NotFound';
import Nav from './Nav';
import AddJob from './AddJob';


const App = () => {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/post-job" element={<JobApplication />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
