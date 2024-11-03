import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagManager from 'react-gtm-module';


function App() {

  const tagManagerArgs = {
    gtmId: 'GTM-M2BL65SC'
  };

  TagManager.initialize(tagManagerArgs);

  return (
    //möjliggöra navigering i applikationen utan att ladda om sidan
   <Router> 
      <Header/>
    {/* definerar olika sidor som användaren kan navigera. */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
