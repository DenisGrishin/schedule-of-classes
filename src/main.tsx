import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'firebase/firestore';
import 'firebase/auth';
import './index.css';

import App from './App.tsx';

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
