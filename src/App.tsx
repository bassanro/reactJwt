import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/Register';
import { Logout } from './pages/logout';
import { HomePage } from './pages/Application';

import 'antd/dist/antd.css';
import { PrivateRoute } from './components/PrivateRoute';
import { useEffect, useState } from 'react';
import { authenticationService } from './services/auth.service';


function App() {
  const [currentUser, setCurrentUser] = useState<null|any>(null);

  useEffect(() => {
    authenticationService.currentUser.subscribe(x => setCurrentUser(x));
    } , []);

    console.log(currentUser);

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/loggedIn" component={HomePage}/>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
