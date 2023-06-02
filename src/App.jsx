import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portofolio from './components/portofolio/Portofolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toast'

const App = () => {
  return (
    <>
      <ToastContainer delay={3000} />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
