import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Individuals from './pages/individuals';
import Teams from './pages/Teams';
import Enterprise from './pages/Enterprise';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/individuals' element={<Individuals/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/enterprise' element={<Enterprise/>}/>

        </Routes>
      </Router>
   </div>
  )
}

export default App
