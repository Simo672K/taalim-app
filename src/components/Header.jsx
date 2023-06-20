import Hero from "./Hero"
import Navbar from "./Navbar"

function Header() {
  return (
    <header className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header