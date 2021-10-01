import { NotFound } from 'http-errors';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Header/Shop/Shop';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderRivew/OrderReview';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
              <Shop></Shop>
          </Route>
          <Route path='/shop'>
              <Shop></Shop>
          </Route>
          <Route path='/order'>
              <OrderReview></OrderReview>
          </Route>
          <Route path='/manage'>
            <Inventory></Inventory>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
