
import './App.css';
import Header from './Components/Header/Header';
import Cinema from './Components/Cinema/Cinema';
import Sign from '../src/Components/Sign/Sign';
import HomeHeader from '../src/./Components/Home/HomeHeader/HomeHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/./Components/Layout/Layout';
import Home from '../src/Components/Home/Main/Home'
import Slider from "react-slick";

function App() {
  return (
    <div className="App">
 
 <Router>
     <Layout>
      <Routes></Routes>
        <Routes>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/' element={<Cinema/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/homeheader' element={<HomeHeader/>}/>
        </Routes>
        </Layout>
 </Router>
  
    
    </div>
  );
}

export default App;
