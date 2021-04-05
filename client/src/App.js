import { Route, BrowserRouter as Router, Switch, Link, useHistory } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import {Provider} from './Context';

function App() {
  return (
   
    <Provider>
      <Router>
        <div className="App">
          <header className="App-header">
            
          </header>
          <body>
          <Switch>
                <Route exact path="/">
                  <ProductPage />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  < Register />
                </Route>
                <Route path="/cart">
                
                  < Cart />
                </Route>
              </Switch>
          </body>
        </div>
      </Router>
   
    </Provider>
  );
}

export default App;
