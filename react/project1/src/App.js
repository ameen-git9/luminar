import './App.css'
import Register from'./register'
import Login from './Login'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'


function App(){


  return(
    <>
      <Routes>
        <Route path= 'reg' element={<Register/>}/>
        <Route path= 'log' element={<Login/>}/>
        <Route path= 'home' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App