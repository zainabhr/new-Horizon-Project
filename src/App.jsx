import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Courses from './pages/CoursesPage';
import Header from './components/Header';
import CourseDetails from './pages/CourseDetailsPage';
import Login from './pages/LoginPage';
import Cart from './pages/CartPage';
import NotFoundPage from './pages/404NotFoundPage';

function App() {
  

  return (
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
      
  )
}

export default App