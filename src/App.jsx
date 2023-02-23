import './css/index.css'
import Home from './pages/home'
import Header from './components/header'
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import Footer from './components/footer'
import ErrorPage from './pages/notFound'

function App() {
  return (
    <div className="fade-in-animation">
      <Header />
      <Home />
      <AboutMe />
      <Footer />
    </div >
  )
}

export default App
