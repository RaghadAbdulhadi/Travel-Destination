import Home from './Components/home/Home';
import Header from './Components/header/Header'
import Footer from "./Components/footer/Footer";
import TourDetails from './Components/TourDetails/TourDetails';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<TourDetails/>} />
          <Route path="/ContactUs" element={< Footer author="Raghad Abdulhadi" />} />
        </Routes>
    </>
  );
}


export default App;

//once i have the path i will render the Tour Details