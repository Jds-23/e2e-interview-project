import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Component/Login/Login"
import Profile from "./Component/Profile/Profile"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
