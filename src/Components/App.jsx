
// function App() {
//   return (
//     <>
//     <div className="fresher-app">
//       This is our frehser app.
//     <span>This is a span</span>
//     </div>
//     </>
//   );
// }

//export default App;

import Demo from "./Demo";
import Navigation from "./Navigation";
import CandidatesList from "../pages/CandidatesList";
const App = () =>{
  const navigationItems = ["Home","About Us","Contact Us","Services"]
  // const navItems = ["Home1","About Us1","Contact Us1","Services1"]
  // const navItems1 = ["Home2","About Us2","Contact Us2","Services2"]
  return (
    <>
    <div className="fresher-app">
      {/* This is our frehser.<br></br>
      <Demo/> */}
      <Navigation navigationitems={navigationItems} data1={"ubdt"} data2={2}/>
      <CandidatesList/>
      {/* <Navigation navigationitems={navItems} data1={"ubdt"} data2={2}/>
      <Navigation navigationitems={navItems1} data1={"ubdt"} data2={2}/> */}
    </div>
    </>
  );
}

export { App };