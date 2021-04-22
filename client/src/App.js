import Dashboard from "./Dashboard";
import Login from "./Login";

import "./App.scss";
import Navbar from "./Navbar";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <div className="wrapper">
         <Navbar />
      <Dashboard code={code} />
    </div>
  ) : (
    <div className="">
      <Login />
    </div>
  );
}

export default App;
