import "./App.scss";
import Homepage from "./pages/hompage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInPage from "./pages/sign-in-page/SignInPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />;
        <Route exact path="/shop" component={Shop} />;
        <Route exact path="/sign-in" component={SignInPage} />;
      </Switch>
    </div>
  );
}

export default App;
