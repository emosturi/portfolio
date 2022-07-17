import './App.scss'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout.component'
import Home from './components/home/home.component'
import About from './components/about/about.component'
import ContactForm from './components/contact/contact.component'

function App() {
 return (
  <Fragment>
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="contact" element={<ContactForm />} />
    </Route>
   </Routes>
  </Fragment>
 )
}

export default App
