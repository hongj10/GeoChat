import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './componets/map/map';
export { default } from "./componets/map/map"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
      <Map>
        <App />
      </Map>
  </React.StrictMode>,
);