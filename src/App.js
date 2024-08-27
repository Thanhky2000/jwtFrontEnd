import Nav from './components/navigation/Nav';
import Login from './components/login/Login';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </Router>
  );
}

export default App;
