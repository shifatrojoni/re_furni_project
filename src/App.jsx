import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Servicepage from './Pages/Servicepage'
import ContactPage from './Pages/ContactPage'
import ShopPage from './Pages/ShopPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<Servicepage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
