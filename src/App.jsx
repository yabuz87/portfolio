import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// import "./index.css"
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
    </>
  )
}

export default App
