import Nav from './components/navigation/Nav';
import Login from './components/login/Login';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './components/signup/Signup';

function App() {
  return (
    <Router>
    <div className='app-container'>
      
      <Switch>
          <Route path="/news">
            News
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
           <Signup />
          </Route>
          <Route path="/" exact>
          <Nav />
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
