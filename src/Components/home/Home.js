import Header from "../header/Header";
import Footer from "../footer/Footer";
import tourData from "../../data/db.json";
import Tours from "../tours/Tours"


function Home(){
    return (
      <>
      <Header/>
      <Tours data = {tourData}/>
      <Footer author = "Raghad Abdulhadi"/>
      </> 
    );
  }

  export default Home;
