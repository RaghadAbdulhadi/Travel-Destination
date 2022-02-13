// function MemesList(props) {
//     console.log(props)
//     return (
//         <>
//             {
//                 props.data.map(meme => {
//                     return (
//                         <>
//                             <h1>Name:{meme.name} </h1>
//                             <img src={meme.image} />
//                             <p>Rank: {meme.info}</p>
//                             <p>Text:{meme.bottomText}</p>
//                         </>
//                     )
//                 })
//             }
//         </>

//     )


// }

// export default MemesList;


//import logo from './logo.svg';
//import './App.css';
// import UserInfo from './Components/UserInfo.js';
// import MemesList from './Components/MemesList';
// import memesData from './data/data.json';

// function App() {
//   return (
//     //Container for my html tags, either fragment or a div 
//     <> 
//       <h1 style = {{color:"blue"}}>Hello React users</h1>
//       <p>This is my first react app</p>
//       <UserInfo name = "Raghad" favFood = "zag" favColor = "red"/>
//       <MemesList data = {memesData}/>
//     </>

//   );
// }