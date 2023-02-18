import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './css/App.css'
import Home from './pages/home'
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import ErrorPage from './pages/notFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
])

function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <div className="circle absolute"></div>
      <div className="circle absolute bottom-0 right-1/3 w-[2rem] h-[2rem]"></div>
      <div className="circle absolute top-1/2 left-0 w-[3rem] h-[3rem]"></div>
    </main>
  )
}

export default App
