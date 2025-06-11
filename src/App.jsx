import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Hedr from './components/Hedr'
import Landing from './pages/Landing'
import Add from './pages/Add'

function App() {

  return (
    <>
    <Hedr/>
    {/* path  */}
   <Routes>
     <Route path='/' element={<Landing/>} />
      <Route path='/add' element={<Add/>} />

   </Routes>

    <Footer/>
    </>
  )
}

export default App
