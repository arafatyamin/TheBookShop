import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from 'react-photo-view';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhotoProvider>
      <App></App>
    </PhotoProvider>
  </React.StrictMode>
);
reportWebVitals();
