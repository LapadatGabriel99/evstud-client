import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/Login';
import AppBar from './components/header/AppBar';
import UserProfile from './components/user/UserProfile';
import SecuredRoute from './components/routes/SecuredRoute';
import LoginRoute from './components/routes/LoginRoute';
import UserHub from './components/user/UserHub';

const isLoggedIn = false;
const role = "ADMIN"

function App() {
  return (
    <Router>
      <div className='App'>
        <AppBar isLoggedIn={isLoggedIn} role={role}/> 
        <Switch>
          <LoginRoute isLoggedIn={isLoggedIn} role={role} exact path='/login' component={Login}/>
          <SecuredRoute isLoggedIn={isLoggedIn} exact path='/user-profile' component={UserProfile}/>
          <SecuredRoute isLoggedIn={isLoggedIn} exact path='/user-hub' component={UserHub}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
