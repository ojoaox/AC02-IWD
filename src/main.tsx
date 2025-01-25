import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//IMPORTS
import './index.css';
import App from './App.tsx';
// CSS SCROLL
import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
