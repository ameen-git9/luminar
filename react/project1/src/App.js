import './App.css'
import Register from'./register'
import Login from './Login'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Student from './Student'
import Counter from './Counter'



function App(){


  return(
    <>
      <Routes>
        <Route path= 'reg' element={<Register/>}/>
        <Route path= 'log' element={<Login/>}/>
        <Route path= '' element={<Home/>}/>
        <Route path= 'stud' element={<Student/>}/>
        <Route path= 'count' element={<Counter/>}/>
      </Routes>
    </>
  );
}

export default App