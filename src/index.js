import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'e987ffd4-3463-4579-9bb4-231395cc8ba0',
    clientToken: 'pub56e8d69ab66fa9c70e7a3805efa20da0',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'aicte-website',
    env: 'dev',
    // Specify a version number to identify the deployed version of your application in Datadog
    version: '0.1.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 50,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
