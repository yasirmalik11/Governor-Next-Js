import React from 'react';
import Image from 'next/image';
import myImage from './image/Yasir1.jpg'; 
import './globals.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-section">
        <h1>Welcome to Our HSE Supervisor Portal</h1>
        <p>Ensuring safety and compliance in every project is our top priority!</p>
        <p>Explore our resources and services designed to support HSE best practices and protect our workforce.</p>
        <a href="#" className="cta-btn">Discover HSE Resources</a>
      </div>
      <div className="image-section">
        <Image
          src={myImage}
          alt="HSE Supervisor"
        />
      </div>
    </div>
  );
}
