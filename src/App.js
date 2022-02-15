import Home from './Components/home/Home';
import Header from './Components/header/Header'
//import Tours from './Components/tours/Tours'
import Footer from "./Components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/city/:id" element={Tours} /> */}
          <Route path="/ContactUs" element={< Footer author="Raghad Abdulhadi" />} />
        </Routes>
      </BrowserRouter>,
    </>

  );
}


export default App;