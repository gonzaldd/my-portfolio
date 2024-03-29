import './css/index.css'
import Home from './pages/home'
import Header from './components/header'
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import Footer from './components/footer'
import Contact from './pages/contact'
import ErrorPage from './pages/notFound'

function App() {
  return (
    <div className="fade-in-animation xl:max-w-[65%]">
      <Header />
      <Home />
      <AboutMe />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
