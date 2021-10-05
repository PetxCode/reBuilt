import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import { FoodScreen } from "./Food/HomeScreen";
import { WilmerHome } from "./Wilmer/WilmerHome";
import HeaderScreen from "./components/HeaderNav";
// import {HomeScreen} from "./Food/HomeScreen";
import CartScreen from "./components/CartScreen";
import DetailScreen from "./components/DeatailScreen";
import Home from "./Axios/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderScreen /> */}
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/food" exact component={FoodScreen} />
        <Route path="/wilmer" exact component={WilmerHome} />
        <Route path="/axios" exact component={Home} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/details/:id" exact component={DetailScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
