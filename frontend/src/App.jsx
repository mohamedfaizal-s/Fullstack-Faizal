import React from 'react'
import Parent from './component/Parent'
import State from './component/State'
import Navbar from './component/Navbar'
import{Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    //fragment tag
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<parent/>}></Route>
      <Route path='/useState' element={<State/>}/>
    </Routes>
    </>
  )
}
 export default App
