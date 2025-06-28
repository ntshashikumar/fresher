
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
import Sidebar from "./Sidebar";

const App = () =>{
  const navigationItems = ["Home","About Us","Contact Us","Services"]
  const candidatesList= [
    {
        name: "Shashikumar N T",
        college: "UBDT",
        branch: "CSE",
        photo: "",
        resume: "",
        city:"Davangere",
        sslc: 80.8,
        puc:89.5,
        degree: 85.4,
        projects:[
            {
                name: "Project 1",
                description: "Description 1",
                count: 4,
            },
            {
                name: "Project 2",
                description: "Description 2",
                count: 4,
            },
        ]
    },
    {
        name: "Vijay Kogali",
        college: "SIT",
        branch: "CSE",
        photo: "",
        resume: "",
        city:"Tumkur",
        sslc: 78,
        puc:81,
        degree: 65,
        projects:[
            {
                name: "Project 1",
                description: "Description 1",
                count: 4,
            },
            {
                name: "Project 2",
                description: "Description 2",
                count: 4,
            },
        ]
    },
    {
        name: "Karthik",
        college: "UBDT",
        branch: "ISE",
        photo: "",
        resume: "",
        city:"Davangere",
        sslc: 80.8,
        puc:89.5,
        degree: 85.4,
        projects:[
            {
                name: "Project 1",
                description: "Description 1",
                count: 4,
            },
            {
                name: "Project 2",
                description: "Description 2",
                count: 4,
            },
        ]
    },
    {
        name: "Sahil",
        college: "GMIT",
        branch: "ECE",
        photo: "",
        resume: "",
        city:"Davangere",
        sslc: 80.8,
        puc:89.5,
        degree: 85.4,
        projects:[
            {
                name: "Project 1",
                description: "Description 1",
                count: 4,
            },
            {
                name: "Project 2",
                description: "Description 2",
                count: 4,
            },
        ]
    },
    {
        name: "Yashaswini",
        college: "STJIT",
        branch: "CSE",
        photo: "",
        resume: "",
        city:"Bangalore",
        sslc: 80.8,
        puc:89.5,
        degree: 85.4,
        projects:[
            {
                name: "Project 1",
                description: "Description 1",
                count: 4,
            },
            {
                name: "Project 2",
                description: "Description 2",
                count: 4,
            },
        ]
    },
    {
        name: "Ashwini",
        college: "GMIT",
        branch: "ECE",
        photo: "",
        resume: "",
        city:"Davangere",
        sslc: 80.8,
        puc:89.5,
        degree: 85.4,
        projects:[
            {
                name: "Project 1",
                description: "Description 1",
                count: 4,
            },
            {
                name: "Project 2",
                description: "Description 2",
                count: 4,
            },
        ]
    }
]


  // const navItems = ["Home1","About Us1","Contact Us1","Services1"]
  // const navItems1 = ["Home2","About Us2","Contact Us2","Services2"]
  return (
    <>
    <div className="fresher-app">
      {/* This is our frehser.<br></br>
      <Demo/> */}
      <Navigation navigationItems={navigationItems} data1={"ubdt"} data2={2}/>
      <CandidatesList candidatesList={candidatesList}/>
      <Sidebar/>
      {/* <Navigation navigationitems={navItems} data1={"ubdt"} data2={2}/>
      <Navigation navigationitems={navItems1} data1={"ubdt"} data2={2}/> */}
    </div>
    </>
  );
}

export { App };