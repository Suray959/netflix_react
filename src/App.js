
import './App.css';
import Header from './Components/Header/Header';
import Cinema from './Components/Cinema/Cinema';
import Sign from '../src/Components/Sign/Sign'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/./Components/Layout/Layout';

function App() {
  return (
    <div className="App">
 
 <Router>
     <Layout>
      <Routes></Routes>
         <Header />
        <Cinema />
        <Routes>
          <Route path='/sign' element={<Sign/>}/>
        </Routes>
        </Layout>
 </Router>
  
    
    </div>
  );
}

export default App;
