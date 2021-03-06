import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Navbar} from "./components/layouts/Navbar";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import {Home} from "./components/pages/Home";
import {Footer} from "./components/layouts/Footer";
import {Login} from "./components/pages/Login";
import {Signup} from "./components/pages/Signup";
import {Teacher} from "./components/pages/Teacher";
import {Student} from "./components/pages/Student";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar appName="Real Labs"/>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/login" exact />
            <Route component={Signup} path="/signup" exact />
            <Route component={Teacher} path="/teacher" exact />
            <Route component={Student} path="/student" exact />
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
