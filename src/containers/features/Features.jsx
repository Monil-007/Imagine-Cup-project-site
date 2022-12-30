import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Gandhi  Monil',
    text: 'Developed portfolio & React based main project-app',
  },
  {
    title: 'Akhil  Rajeev',
    text: 'Built Machine Learning Models and configured the dataset',
  },
  {
    title: 'Vivek  Dharewa',
    text: 'Built Machine Learning Models and configured the dataset',
  },
  {
    title: 'Abhinay  Reddy',
    text: 'Developed portfolio & React based main project-app',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Project Team Members and their roles</h1>

    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
