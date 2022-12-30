import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="The problem and our solution focused model" text="E-waste is a growing problem that has negative impacts on both human health and the environment. It is important to find ways to properly manage and dispose of electronic waste to minimize these negative impacts." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The metals in e-waste are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Aim" text="Our project aims to address this issue by creating an ecosystem that uses machine learning to scan and identify the metals present in e-waste. The system will then recommend the most profitable metals to extract, using a comprehensive web platform." />
      <Feature title="Methodology" text="By integrating Azure services into the web app framework and the machine learning phases of the project, we hope to create a sustainable solution for e-waste management. Our platform will not only help to reduce the negative impacts of e-waste on the environment, but it will also provide a financial incentive for responsible e-waste disposal." />
      <Feature title="belief" text="We believe that our project has the potential to make a meaningful contribution to the global effort to address the e-waste problem and to create a more sustainable future for all." />
    </div>
  </div>
);

export default WhatGPT3;
