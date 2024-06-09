import { Brands } from "./components/Brands"
import { Contacto } from "./components/Contacto"
import { Footer } from "./components/Footer"
import { Gestion } from "./components/Gestion"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import { Servicios } from "./components/Servicios"

function App() {

  return (
    <div className="font-effra_cc bg-blanco text-center text-negro">
      <Nav />
      <Hero />
      <Gestion /> 
      <Brands />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
