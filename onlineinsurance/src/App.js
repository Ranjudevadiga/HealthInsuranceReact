import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/Login';

import UserComponent from './components/user/UserComponent';

import AdminComponent from './components/admin/AdminComponent';
import RegisterCustomer from './components/user/RegisterCustomer';
import AdminPolicyDisplay from './components/admin/AdminPolicyDisplay'

function App() { 
  return (
    <div className="App">
     
      <Router>
      <Switch>
      <Route path="/" exact component={Welcome}></Route>
      <Route path="/About" exact component={AboutUs}></Route>   
      <Route path="/login" exact component={Login}></Route>
      <Route path="/admin" exact component={AdminComponent}></Route>
      <Route path="/user" exact component={UserComponent}></Route>
      <Route path="/register" exact component={RegisterCustomer}></Route>
      <Route path="/adminviewpolicy" exact component={AdminPolicyDisplay}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
