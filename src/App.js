
import './App.css';
import Home from './mainPage/home'
import Nav from './mainPage/Navbar'
import Footer from './mainPage/footer'
import ServicePage from '../src/Pages/OurService'
import Safety from '../src/Pages/safetyPage'
import Contact from '../src/Pages/contact'
import About from '../src/Pages/about'
import Blog from '../src/Pages/BlogPage'
import ScrollToTop from './scrollTop'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <>

    <Router>
    <ScrollToTop />
    
      <Nav/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='services' element={<ServicePage />}></Route>
          <Route exact path='safety' element={<Safety />}></Route>
          <Route exact path='contact' element={<Contact />}></Route>
          <Route exact path='about' element={<About />}></Route>
          <Route exact path='blogs' element={<Blog />}></Route>
        </Routes>
        <Footer/>
       
      </Router>
   
   </>
  );
}

export default App;
