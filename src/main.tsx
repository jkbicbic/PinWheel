import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { SuspenseLayout } from './layouts/SuspenseLayout';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SuspenseLayout>
      <App />
    </SuspenseLayout>
  </StrictMode>,
)
