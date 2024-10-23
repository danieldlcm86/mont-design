import { BrowserRouter } from 'react-router-dom'
import RoutesProject from '../../hooks/Routes/Routes'
import Navbar from "../../components/Navbar/Navbar"

import './App.css'
import Footer from '../../components/Footer/Footer'

function App() {
  // Modularicé la App dividiendo el Hook de useRoutes en Routes.jsx

  return (
    <>
      <div className=''>
        < BrowserRouter>
          <RoutesProject />
          <Navbar />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
