import { useState } from 'react'
import './App.css'
import Nav from'./components/Nav'
import favicon from './components/img/favicon.jpg';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="header">
          <img src={favicon} className="rounded-full" />
          <h1>MATHMYSTIC</h1>
          {/* <img src="{require('./components/img/favicon.jpg')}"/> */}
        </div>
       <Nav />
       <div className="scr">alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/></div>
       <div className="scr2">alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/></div>
       <div className="scr3">alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/>alhfkahlfk<br/></div>
    </div>
  )
}

export default App