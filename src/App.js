import "./App.css";
import Dashboard from "./pages/Dashboard";
import Leave from "./pages/Leave";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/leaves">
            <Leave />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
