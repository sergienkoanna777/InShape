import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CurrentUserProvider } from './components/CurrentUserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <CurrentUserProvider>
    <App />
    </CurrentUserProvider>,
  </React.StrictMode>
);
