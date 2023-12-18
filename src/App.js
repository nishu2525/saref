import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Header/Nav';
// import navbar from './Header/Navbar'
import Footer from './Components/Footer/Footer';
import Donate from './Header/Donate';
import JoinPage from './Components/JoinPage';
import Reports from './Components/Reports';
import Children from './Components/Children';
import Donatebtn from './Components/Donatebtn';
import Joinus from './Components/Joinus';
import Women from './Components/Women';
import Lgbtqi from'./Components/Lgbtqi';
import TermsPg from'./Components/TermsPg';
import RefundPg from './Components/RefundPg';
import Csr from './Components/Csr';


function App() {
  return (
   
    <div className="App">
     <Nav />
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path='/donate' element={<Donate/>}></Route>
      <Route path='/joinpage' element={<JoinPage/>}></Route>
      <Route path='/reports' element={<Reports/>}></Route>
      <Route path='/Children' element={<Children/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/lgbtqi' element={<Lgbtqi/>}></Route>
      <Route path='/Csr' element={<Csr/>}></Route>
      <Route path='/terms_and_conditions' element={<TermsPg/>}></Route>
      <Route path='/refund_policy' element={<RefundPg/>}></Route>
     </Routes>
     <Donatebtn/>
      <Joinus />
     <Footer/>  
    </div>
    

  );
}

export default App;
