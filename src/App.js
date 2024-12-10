import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServiceData from "./Asserts/ServiceData";
import ServicesPage from './Pages/ServicesPage';
import  Header  from './Components/Header';
import ContactUs from './Components/ContactUs';
import Faq from './Pages/Faq';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/Gallery';
import Non from './Components/Non';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {ServiceData.map((v,i)=>{
          const {slugs} = v;
          return(
            <>
            
            <Route path={`${slugs}`} element={<ServicesPage />} />
            </>
          )
        })}
        <Route path='/orthopedic-near-kandivali' element={<ContactUs />} />
        <Route path='/orthopedic-doctor-kandivali' element={<AboutUs />} />
        <Route path='/Gallery' element={<Gallery />} />
        {/* <Route path='/Blog' element={<Blog />} /> */}
        <Route path='/ortho-specialist-kandivali' element={<Faq />} />
        <Route path='*' element={<Non />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
