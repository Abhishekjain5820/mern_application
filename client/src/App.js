import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Detail from './components/Detail';
import Edit from './components/Edit';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<Detail/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
