import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            
           <h1>Welcome to the dogs pages</h1>
           <Link to="/home">Click to enter</Link>
        </div>
    );
};

export default LandingPage;