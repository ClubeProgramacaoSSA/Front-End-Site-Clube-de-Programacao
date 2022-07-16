import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';
import Workshop from './Pages/WorkshopPage/Workshop';
import Torneios from './Pages/Torneios/Torneios';
import SobreNos from './Pages/Sobre/SobreNos';
import Projetos from './Pages/Projetos/Projetos';
import NavBar from './Components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      
        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/sobrenos" element={<SobreNos/>}/>
          <Route exact path="/projetos" element={<Projetos/>}/>
          <Route exact path="/torneios" element={<Torneios/>}/>
          <Route exact path="/workshop" element={<Workshop/>}/>
        </Routes>
    </div>
    
  )
}

export default App;
