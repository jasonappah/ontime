import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Content />
        </Route>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}

function Content() {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to={match.path === "/test" ? "/" : "/test"}>
            Edit <code>src/App.js</code> and save to reload.
          </Link>
        </p>
        <p>
          {match.url} | {match.path} | {match.name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function Content2() {
//   let match = useRouteMatch();
//   console.log(match);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <Link to="/">
//             Edit <code>src/ANOOOOOOOOOpp.js</code> and save to reload.
//           </Link>
//         </p>
//         <p>
//           {match.url} yeet {match.path} yeet {match.name}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
