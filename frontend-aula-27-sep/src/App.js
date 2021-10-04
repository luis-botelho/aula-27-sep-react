import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/';
import CreateProduct from './Pages/CreateProduct'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/create' component={CreateProduct} />
      </Switch>
    </div>
  );
}

export default App;
