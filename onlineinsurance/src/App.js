import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import './App.css';
import {BrowserRouter as Router, Route,Switch, useLocation} from 'react-router-dom';
import Login from './components/Login';

import UserComponent from './components/user/UserComponent';
import AddCustomerDetails from './components/user/AddCustomerDetails';
import AdminComponent from './components/admin/AdminComponent';
import RegisterCustomer from './components/user/RegisterCustomer';
import AdminPolicyDisplay from './components/admin/AdminPolicyDisplay';
import PolicyDisplay from './components/user/PolicyDisplay';
import addPolicy from './components/admin/addPolicy';
import ViewCustomer from './components/admin/ViewCustomer';
import AdminUpdatePolicy from './components/admin/AdminUpdatePolicy'
import PurchasedPolicy from './components/user/PurchasedPolicy'
import Services from './components/Services';
import Contact from './components/Contact';
import ErrorBoundary from './ErrorBoundary';



function App() { 
  return (
    <div className="App">
     
      <Router>
        <ErrorBoundary >  
      <Switch>

      <Route path="/" exact component={Welcome}></Route>
      <Route path="/About" exact component={AboutUs}></Route> 
      <Route path="/services" exact component={Services}></Route>  
      <Route path="/contact" exact component={Contact}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/admin" exact component={AdminComponent}></Route>
      <Route path="/user" exact component={UserComponent}></Route>
      <Route path="/register" exact component={RegisterCustomer}></Route>
      <Route path="/adminviewpolicy" exact component={AdminPolicyDisplay}></Route>
      <Route path="/addCus" exact component={AddCustomerDetails}></Route>
      <Route path="/customerViewPolicy" exact component={PolicyDisplay}></Route>
      <Route path="/add-Policy" exact component={addPolicy}></Route>
      <Route path="/viewcustomers" exact component={ViewCustomer}></Route>
      <Route path="/edit-policy" exact component={AdminUpdatePolicy}></Route>
      <Route path="/viewPurchasedPolicy" exact component={PurchasedPolicy}></Route> 
      </Switch>
      </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
