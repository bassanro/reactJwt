import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/Register';
import { Logout } from './pages/logout';
import { SecureLogin } from './pages/Application';

import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/loggedIn" component={SecureLogin}/>
          <Route exact path="/" component={Login} />
      

        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
