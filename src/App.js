import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Nav';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Featured from './Components/Featured/Featured';
import Latest from './Components/Latest/Latest';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
    </BrowserRouter>
  );
}

export default App;
