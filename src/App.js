import BitcoinNews from "./components/BitcoinNews";
import BusinessNews from "./components/BusinessNews";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/bitcoin">Bitcoin</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/business">
          <BusinessNews />
        </Route>
        <Route path="/bitcoin">
          <BitcoinNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
