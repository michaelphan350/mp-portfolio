// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Imagemap from './components/imagemap/imagemap.js'

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <div className='sections'>
        <Imagemap></Imagemap>
      </div>
    </div>
  );
}

export default App;
