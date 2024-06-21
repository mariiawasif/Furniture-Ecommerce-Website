import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar/Nav';
import Header from './Components/LandingPage/Header/Header';
import Hero from './Components/LandingPage/Hero/Hero';
import Featured from './Components/LandingPage/Featured/Featured';
import Latest from './Components/LandingPage/Latest/Latest';
import Features from './Components/LandingPage/Features/Features';
import Trending from './Components/LandingPage/Trending/Trending';
import Discount from './Components/LandingPage/Discount/Discount';
import Categories from './Components/LandingPage/Categories/Categories';

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
      <Categories/>
    </BrowserRouter>
  );
}

export default App;
