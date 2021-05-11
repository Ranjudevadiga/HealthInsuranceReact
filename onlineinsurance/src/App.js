import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import AdminComponent from './components/admin/AdminComponent';
import UserComponent from './components/customer/UserComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Welcome}></Route>
      <Route path="/About" exact component={AboutUs}></Route>   
      <Route path="/login" exact component={Login}></Route>
      <Route path="/admin" exact component={AdminComponent}></Route>
      <Route path="/user" exact component={UserComponent}></Route>

      </Router>
    </div>
  );
}

export default App;
