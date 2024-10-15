import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  return (
   <Router>
      <Header/>
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
