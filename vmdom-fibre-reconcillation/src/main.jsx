import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// createroot creates a dom in this we have vartual dom which tracks dom and compare updates with main dom and update the page
// in virtual dom we have full track of dom

// React fiber : https://github.com/acdlite/react-fiber-architecture
// React Reconcilization : https://legacy.reactjs.org/docs/reconciliation.html


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)