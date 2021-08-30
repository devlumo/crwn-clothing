import "./App.scss";
import Homepage from "./pages/hompage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />;
      <Route exact path="/shop" component={Shop} />;
    </Switch>
  );
}

export default App;
