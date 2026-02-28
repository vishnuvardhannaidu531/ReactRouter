// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import {BrowserRouter,Route,Routes} from "react-router"
// // import Contact from './Contact'
// // import DashBoard from './DashBoard'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path='/' element={<Home/>}></Route>
// //           <Route path="/Contact" element={<Contact/>}></Route>
// //           <Route path='/DashBoard' element={<DashBoard/>}></Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </>
// //   )
// // }

// // export default App


// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import Contact from "./Contact";
// import DashBoard from "./DashBoard";
// import Zero from "./Zero";

// function App() {
//   return (
//     // <BrowserRouter>
//     //   <Routes> 
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/contact" element={<Contact />} />
//     //     <Route path="/dashboard" element={<DashBoard />} />
//     //   </Routes>
//     // </BrowserRouter>

//     <BrowserRouter>
//       <nav>
//         <Link to='/'>Home</Link>
//         <Link to="/DashBoard">DashBoard</Link>
//         <Link to="/Contact">Contact</Link>
//       </nav>
//       <Routes> 
//         <Route path="/" element={<Home/>} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/dashboard" element={<DashBoard />} >
//           <Route index element={<Zero/>}/>
//           <Route path="Hello" element={<Hello/>}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import DashBoard from "./DashBoard";
import Zero from "./Zero";
import Hello from "./Hello";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">DashBoard</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Zero />} />
          <Route path="hello" element={<Hello />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;