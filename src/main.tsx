import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import {AppProviders} from '@/context'

import '@/test/server/dev-server'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
)
