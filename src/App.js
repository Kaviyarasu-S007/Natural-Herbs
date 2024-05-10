<<<<<<< HEAD
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
=======
// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/LoginPage'; 
import SignupPage from './pages/SignupPage'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/product" element={<productPage />} />
      </Routes>
    </Router>
>>>>>>> 1f9c1c357fbce3072991542908eb521a59946bad
  );
}

export default App;