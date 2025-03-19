import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './output.css'
import App from './App.jsx'
import Services from './sections/Services.jsx'
import Agent from './sections/Agent.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Signup from './Pages/Signup.jsx'
import Heros from './sections/Heros.jsx'
import { Footer } from 'flowbite-react'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          
    </Routes>
    </BrowserRouter>
  </StrictMode>
)