//import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import tours from "../../data/db.json"

function Home(){
    return (
      <div>
      <Tours tours = {tours}/>
      <Footer author = "Raghad Abdulhadi"/>
      </div> 
    );
  }

  export default Home;

  
