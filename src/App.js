import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Navbar />

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
