import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomePage from './components/pages/homePage.jsx'

import AboutPage from './components/pages/aboutPage/aboutPage.jsx'
import CartPage from './components/pages/cartPage/cartPage.jsx'
import ContactPage from './components/pages/contactPage/contactPage.jsx'
import LoginPage from './components/pages/loginPage/loginPage.jsx'
import XemThemHomePage from './components/pages/xemthemHomePage.jsx'
import RegisterPage from './components/pages/registerPage/registerPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/xemthem' element={<XemThemHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
