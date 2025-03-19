import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './index.css'; 
import Heros from './sections/Heros';
import Services from './sections/Services';
import Agent from './sections/Agent';
import Footers from './components/Footers';
import LoginPage from './Pages/LoginPage'; // Import LoginPage
import Signup from "./Pages/Signup"; // Import Signup

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Heros />
      {/* <Services/>
      <Agent/> */}
      <Footers />
    </div>
  );
};

export default App;
