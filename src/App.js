import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Title from './Containt/Title';
import Footer from './Containt/Footer';
import {BrowserRouter,Routes,Route,Navigate,Link} from 'react-router-dom'
import Home  from './Containt/Home';
import About from './Containt/About';
import Body from './Containt/Body';
import Cart from './Containt/Cart';

function App() {

  return (
    <div>
      <BrowserRouter>
              <Title/>
                    <Routes>
                      <Route path='/home' element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/body' element={<Body/>}/>
                      <Route path='/cart' element={<Cart/>}/>
                      <Route path='/' element={<Home/>}></Route>
              <Route path='*' element={<Navigate to='/home'/>}></Route>
                    
                    </Routes> 
              <Footer/>
      </BrowserRouter>
             
        
        
      


      
    </div>
  );
}

export default App;
