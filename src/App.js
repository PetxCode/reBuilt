import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import HeaderScreen from "./components/HeaderNav";
import CartScreen from "./components/CartScreen";
import DetailScreen from "./components/DeatailScreen";

function App() {
  return (
    <BrowserRouter>
      <HeaderScreen />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/details/:id" exact component={DetailScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
