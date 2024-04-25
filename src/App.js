import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Plants from './components/Navigation/Plants';
import Seeds from './components/Navigation/Seeds';
import POTS_PLANTERS from './components/Navigation/POTS_PLANTERS';
import SessionState from '../LeafyPlants/src/context/SessionState';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  return (
    <>
      
    <SessionState>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
            <Route path='/' element = {<Homepage />} />
            <Route path='/collections/plants' element = {<Plants />} />
            <Route path='/collections/seeds'element ={<Seeds/>}/>
            <Route path='/collections/pots-planters'element ={<POTS_PLANTERS/>}/>
        </Routes>
      </BrowserRouter>
    </SessionState>
      
    </>
  );
}

export default App;
