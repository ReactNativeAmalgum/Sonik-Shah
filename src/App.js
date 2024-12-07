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
import Blog from './Pages/Blog';
import AboutUs from './Components/AboutUs';
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
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
