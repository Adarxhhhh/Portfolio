import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageURL } from '../../utils';

export const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div>
        <div>
          {skills.map((skill, id) => (
            <div key={id}>
              <div>
                <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul>
          {history.map((historyItem, id) => (
            <li key={id}>
              <img src={getImageURL(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
              <div>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
