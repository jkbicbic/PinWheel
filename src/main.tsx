import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { SuspenseLayout } from './layouts/SuspenseLayout';
import { NavProvider } from './context/Nav';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SuspenseLayout>
      <NavProvider>
        <App />
      </NavProvider>
    </SuspenseLayout>
  </StrictMode>,
)
