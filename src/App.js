import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav";
import favicon from "./components/img/favicon.jpg";
import { withTranslation, Trans } from "react-i18next";

import Home from "./components/UI/Home";
import About from "./components/UI/About";
import Intro from "./components/UI/Intro";
import Doc from "./components/UI/Doc";
import Contact from "./components/UI/Contact";
import Store from "./components/UI/Store";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    
    return (
      <div className="App">
        <div className="App-header">
        <button onClick={() => changeLanguage("vn")}>en</button>
          <button onClick={() => changeLanguage("en")}>vn</button>
          <div className="header">
            <img src={favicon} className="rounded-full" />
            <h1>MATHMYSTIC</h1>
            {/* <img src="{require('./components/img/favicon.jpg')}"/> */}
          </div>

          <h2>
            {/* <Trans> */}
            
            <Nav />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/about" element={<About />} />
                <Route path="/doc" element={<Doc />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </h2>

          
        </div>
        <div className="App-intro">
          <h1>
            <Trans></Trans>
          </h1>
        </div>
      </div>
    );
  }
}

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//         <div className="header">
//           <img src={favicon} className="rounded-full" />
//           <h1>MATHMYSTIC</h1>
//           {/* <img src="{require('./components/img/favicon.jpg')}"/> */}
//         </div>
//        <Nav />
//        <div className="scr">alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/></div>
//        <div className="scr2">alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/></div>
//        <div className="scr3">alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/></div>
//     </div>
//   )
// }

export default withTranslation("translations")(App);


// import Navbar from "./components/UI/Navbar"
// import Home from "./components/UI/Home"
// import About from "./components/UI/About"
// import Intro from "./components/UI/Intro"
// import Doc from "./components/UI/Doc"
// import Contact from "./components/UI/Contact"
// import Store from "./components/UI/Store"

// import Products from "./components/auth/Products"
// import { Route, Routes } from "react-router-dom"
// import favicon from './components/img/favicon.jpg';
// function App() {
//   return (
//     <>
//       <div className="header">
//         <h1>MATHMYSTIC</h1>
//         {/* <img src="{require('./components/img/favicon.jpg')}"/> */}
//       </div>
//       <Navbar />
//       <div className="container">
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/intro" element={<Intro />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/doc" element={<Doc />} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
        
//       </div>
//     </>
//   )
// }

// export default App