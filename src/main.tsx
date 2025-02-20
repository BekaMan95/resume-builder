import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './main.css'
// import App from './App.tsx'
import Container from './Container.tsx'
// import Resume from './Resume.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Container />
  </StrictMode>,
)
