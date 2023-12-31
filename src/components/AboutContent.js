import { Link } from 'react-router-dom';
import './AboutContentStyles.css';


import React from 'react';

import React1 from '../assets/react1.jpg';
import React2 from '../assets/react2.webp';
import MyPhoto from "../assets/myphoto1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a front-end developer. I create responsive secure websites
          for my clients with powerful tools like Html, Css, Javascript, React.js and Next.js
        </p>
        <img className='my-photo' src={MyPhoto} alt='img'/>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="img" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutContent;
