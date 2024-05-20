import React from 'react';
import '../styles/About.css';
import profile from '../images/profile pic.jpg';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profile} alt="Your Photo" className="profile-image" />  {/* Use prop for image */}
        <div className="text-content">
          <p>
            I am a passionate <b>Python Backend Developer</b> with 2 years of professional experience. 
            I specialize in creating <b>robust and efficient software solutions</b>. 
            My expertise lies in developing and optimizing APIs to <b>enhance user interactions </b> 
            and streamline processes.
          </p>
          <p>
            I <b>thrive on solving complex problems</b> and enjoy collaborating with dynamic teams to 
            deliver <b>high-quality results</b>. I am committed to <b>continuous learning</b> and 
            staying updated with the latest industry trends to ensure that my work remains 
            <b>innovative and impactful</b>.
          </p>
        </div>
        <div className="section-box">  {/* Added section-box class */}
         <h3>Education</h3>
           <p>Details about your education.</p>
        </div>
         <div className="section-box">  {/* Added section-box class */}
           <h3>Experience</h3>
           <p>Details about your work experience.</p>
         </div>
         <div className="section-box">  {/* Added section-box class */}
           <h3>Skills</h3>
           <p>Details about your skills.</p>
         </div>
         <div className="section-box">  {/* Added section-box class */}
           <h3>Tools</h3>
           <p>Details about your skills.</p>
         </div>
       </div>
      {/* </div> */}
    </section>
  );
  // return (
  //   <section id="about" className="about">
  //     <h2>About Me</h2>
  //       <p><b>I am a passionate Python Backend Developer with 2 years of professional experience, specializing in creating robust and efficient software solutions. My expertise lies in developing and optimizing APIs to enhance user interactions and streamline processes. I thrive on solving complex problems and enjoy collaborating with dynamic teams to deliver high-quality results. I am committed to continuous learning and staying updated with the latest industry trends to ensure that my work remains innovative and impactful.</b>
  //       </p>
  //     <div className="about-content">
  //       <img src={profile} alt="Your Photo" className="profile-image" />
  //       <div className="section-box">  {/* Added section-box class */}
  //         <h3>Education</h3>
  //         <p>Details about your education.</p>
  //       </div>
  //       <div className="section-box">  {/* Added section-box class */}
  //         <h3>Experience</h3>
  //         <p>Details about your work experience.</p>
  //       </div>
  //       <div className="section-box">  {/* Added section-box class */}
  //         <h3>Skills</h3>
  //         <p>Details about your skills.</p>
  //       </div>
  //       <div className="section-box">  {/* Added section-box class */}
  //         <h3>Tools</h3>
  //         <p>Details about your skills.</p>
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default About;
