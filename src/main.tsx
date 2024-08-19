import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'firebase/firestore';
import 'firebase/auth';
import './index.css';
import firebase from 'firebase/compat/app';
import App from './App.tsx';

import { BrowserRouter as Router } from 'react-router-dom';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAmMncNulb-EIONa717WUOJd4nS3qG81A4',
  authDomain: 'schedule-of-classes-293d0.firebaseapp.com',
  projectId: 'schedule-of-classes-293d0',
  storageBucket: 'schedule-of-classes-293d0.appspot.com',
  messagingSenderId: '990337215895',
  appId: '1:990337215895:web:d97ee259d3684b657d28d2',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
