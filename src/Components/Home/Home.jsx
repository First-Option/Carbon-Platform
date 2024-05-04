

import React,{useState} from 'react';
import './Home.css'; // Import your custom CSS file for styling
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to another page after the loading screen
      navigate('/ProjectsInformation');
    }, 2000);
  };
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content text-center text-light">
        <h1 className="mb-4">Welcome to the Carbon Emission Platform</h1>
        <p className="mb-4">Calculate and reduce your carbon footprint</p>
        <div>
  {isLoading ? (
    <div className="spinner-border text-light" role="status">
    </div>
  ) : (
    <button onClick={handleClick} className="btn btn-primary">
      Get Started
    </button>
  )}
</div>
      </div>
    </div>
  );
};

export default Home;
