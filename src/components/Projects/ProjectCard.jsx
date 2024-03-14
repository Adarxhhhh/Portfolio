import React from 'react';
import { getImageURL } from '../../utils';

export const ProjectCard = ({ project: { title, imageSrc, description, demo, skills, source } }) => {
  console.log('Project Data:', { title, imageSrc, description, demo, skills, source }); // Debugging log
  return (
    <div>
      <img
        src={getImageURL(imageSrc)}
        alt={`Image of ${title}`}
        onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/defaultImage.png'; }} // Adjust fallback image path
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, id) => (
          <li key={id}>{skill}</li>
        ))}
      </ul>
      <div>
        <a href={demo}>Demo</a>
        <a href={source}>GitHub</a>
      </div>
    </div>
  );
};
