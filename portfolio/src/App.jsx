import { About } from './componet/About'
import Body from './componet/Body'
import Contact from './componet/Contact'
import Edu from './componet/Edu'
import Navbar from './componet/Navbar'
import { Projects } from './componet/Projects'
import { Skills } from './componet/Skills'
import Footer from './componet/Footer' // Import the Footer component

function App() {


  return (
    <>
      <Navbar />
      <Body />
      <About />
      <Edu />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> 
    </>
  )
}

export default App