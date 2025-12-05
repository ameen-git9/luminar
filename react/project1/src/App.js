import './App.css'
import Register from'./register'
import Login from './Login'
import {Routes,Route} from 'react-router-dom'


function App(){


  return(
    <>
      <Routes>
        <Route path= 'reg' element={<Register/>}/>
        <Route path= 'log' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App