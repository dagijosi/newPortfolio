import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SmartMonitorProvider } from '@dagij/plugin';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmartMonitorProvider
      endpoint="https://tester-6194.onrender.com"
      projectId="portfolio-7bb91ab3"
      apiKey="sk_b2f3187736775ad25a72aa4f16ca413f89bc839e3e78072d1e81c069f44f0dfb"
      trackClicks={true}
      trackPageViews={true}
      trackPerformance={true}
      trackApiRequests={true}
      debug={false}
    >
      <App />
    </SmartMonitorProvider>
  </StrictMode>,
)
