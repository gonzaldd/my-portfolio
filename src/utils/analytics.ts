import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAOhNgb1fhr8FfMsPHoUsMep1ofLytOUmw',
  authDomain: 'gdd-portfolio.firebaseapp.com',
  projectId: 'gdd-portfolio',
  storageBucket: 'gdd-portfolio.appspot.com',
  messagingSenderId: '539550519269',
  appId: '1:539550519269:web:3c38a56d3037f83ba9e90c',
  measurementId: 'G-B73QSGT4E9',
}

class Analytics {
  analytics
  constructor(){
    try {
      const app = initializeApp(firebaseConfig)
      this.analytics = getAnalytics(app)
    } catch (error) {
      console.log(error)
    }
  }

  private initAnalytics(): void {
    
  }

  public sendAnalyticsEvent (eventName: string): void {
    logEvent(this.analytics, eventName)
  }
}

const analyticsInstance = new Analytics();

export default analyticsInstance;

