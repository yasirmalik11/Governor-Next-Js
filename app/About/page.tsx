import React from 'react';
import Image from 'next/image';
import myImage from '../image/Simple.jpg'; // Replace with your image path
import '../globals.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Muhammad Yasir</h1>
        <p>
          Hi there! I’m <strong>Yasir</strong>, a dedicated <strong>HSE Supervisor</strong> committed to ensuring safe and sustainable work environments. With a passion for <strong>health and safety practices</strong> and a strong background in <strong>environmental management</strong>, I strive to implement effective safety measures and promote a culture of safety within organizations.
        </p>
        <p>
          My approach emphasizes <strong>risk assessment</strong>, <strong>training</strong>, and <strong>compliance</strong> with industry regulations to protect employees and the environment. I enjoy the challenge of identifying potential hazards and developing strategies that not only meet but exceed regulatory requirements. Whether it's conducting safety audits or leading training sessions, I prioritize <strong>preventive measures</strong> and <strong>continuous improvement</strong> in workplace safety.
        </p>
        <p>
          Beyond my professional responsibilities, I am passionate about <strong>staying informed</strong> on the latest health and safety trends and technologies. I actively engage in community outreach and training initiatives, sharing my knowledge and experience to help others understand the importance of safety and environmental stewardship. If you’re looking for a dedicated HSE professional with a commitment to excellence, let's connect and work towards creating safer workplaces together!
        </p>
      </div>
      <div className="image-section">
        <Image
          src={myImage}
          alt="About Me"
          width={400} // Set your desired width
          height={400} // Set your desired height
        />
      </div>
    </div>
  );
}
