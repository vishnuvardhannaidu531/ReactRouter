// function DashBoard(){
//     return(
//         <>
//             <h1>I am in DashBoard</h1>
//         </>
//     )
// }
// export default DashBoard;

import { Outlet } from "react-router";

function DashBoard() {
  return <h1>I am in DashBoard</h1>;
  <Outlet/>
}

export default DashBoard;