import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import './utils/i18n'

const firebaseConfig = {
  apiKey: 'AIzaSyAOhNgb1fhr8FfMsPHoUsMep1ofLytOUmw',
  authDomain: 'gdd-portfolio.firebaseapp.com',
  projectId: 'gdd-portfolio',
  storageBucket: 'gdd-portfolio.appspot.com',
  messagingSenderId: '539550519269',
  appId: '1:539550519269:web:3c38a56d3037f83ba9e90c',
  measurementId: 'G-B73QSGT4E9',
}

try {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
} catch (error) {
  console.log(error)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
