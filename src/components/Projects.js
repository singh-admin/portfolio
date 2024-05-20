import React from 'react';
import '../styles/Projects.css';
import MyImageGallery from './ImageGallery';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
          <MyImageGallery />
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
          <MyImageGallery />
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
