import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/Hero"
import Services from "./components/Services/services"
import About from "./components/About/About"
import Mywork from "./components/mywork/Mywork"
import Contact from "./components/contact/contact"
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
