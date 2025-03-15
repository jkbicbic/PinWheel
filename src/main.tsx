import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { App } from './App';
import { SuspenseLayout } from './layouts/SuspenseLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SuspenseLayout>
      <App />
    </SuspenseLayout>
  </StrictMode>,
)
