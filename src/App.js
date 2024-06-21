import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Nav';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Featured from './Components/Featured/Featured';
import Latest from './Components/Latest/Latest';
import Features from './Components/Features/Features';
import Trending from './Components/Trending/Trending';
import Discount from './Components/Discount/Discount';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
      <Features/>
      <Trending/>
      <Discount/>
    </BrowserRouter>
  );
}

export default App;
