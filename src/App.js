import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './component/About/About';
import Protfoliyo from './component/Protfoliyo/Protfoliyo';
import Counts from './component/Counts/Counts';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='protfolio' element={<Protfoliyo></Protfoliyo>}></Route>
            <Route path='/counts' element={<Counts></Counts>}></Route>
          </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
