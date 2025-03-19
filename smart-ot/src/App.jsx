import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './index.css'; 
import Heros from './sections/Heros';
import Services from './sections/Services';
import Agent from './sections/Agent';
import Footers from './components/Footers';
import LoginPage from './Pages/LoginPage'; // Import LoginPage
import Signup from "./Pages/Signup"; // Import Signup
import AboutUs from './sections/aboutus';



const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Heros />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/agent" element={<Agent />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Services/>
      <Agent/>
      <AboutUs />
      <Footers />
    </div>
  );
};

export default App;
