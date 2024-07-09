// import React from "react";
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import Devd from "./components/Devd/Devd";
// import Savand from "./components/Savand/Savand";
// import Channd from "./components/Channd/Channd";
// import Madhugiri from "./components/Madhugiri/Madhugiri";
// import Footer from "./components/Footer/Footer";

// class App extends React.Component  {
//   constructor() {
//     super();
//     this.state = {
//       input : '',
//       route: 'home',
//     }
//   }
//   onRouteChange = (route) => {
//     window.scrollTo({
//       top: 0,
//       behavior: "auto"
//     })
//     this.setState({route: route})
//   }
//   render() {
//     return (
//     <div className="App">
//       <Navbar onRouteChange={this.onRouteChange} />
//       {
//         this.state.route === 'home'
//         ?
//         <><Home onRouteChange={this.onRouteChange}/></>
//         :(
//           this.state.route === 'dd'
//           ?
//           <><Devd /></>
//           : ( this.state.route === 'sd'
//           ?
//           <><Savand /></>
//           :(
//             this.state.route === 'cd'?
//             <><Channd /></>
//             :(
//               this.state.route === 'mg'?
//               <><Madhugiri /></>
//               :
//               <></>
//             )
//           )
//           )
//         )
//       }
//       <Footer />
//     </div>
//   );
// }
  
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Devd from './components/Devd/Devd';
import Savand from './components/Savand/Savand';
import Channd from './components/Channd/Channd';
import Madhugiri from './components/Madhugiri/Madhugiri';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dd" element={<Devd />} />
          <Route path="/sd" element={<Savand />} />
          <Route path="/cd" element={<Channd />} />
          <Route path="/mg" element={<Madhugiri />} />
          {/* Add a default route or a 404 page if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
