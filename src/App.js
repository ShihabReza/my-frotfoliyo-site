
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './component/About/About';
import Protfoliyo from './component/Protfoliyo/Protfoliyo';

import CountsUs from './CountcUs/CountsUs';
import Footer from './component/Footer/Footer';
import Detals from './component/Detals/Detals';
import Blog from './component/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='protfolio' element={<Protfoliyo></Protfoliyo>}></Route>
            <Route path='/detals' element={<Detals></Detals>}></Route>
            <Route path='/counts' element={<CountsUs></CountsUs>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
          </Routes>
          
      </Navbar>
      
    </div>
  );
}

export default App;
