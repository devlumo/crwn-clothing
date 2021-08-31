import "./App.scss";
import Homepage from "./pages/hompage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInPage from "./pages/sign-in-page/SignInPage";
import { auth } from "./firebase/firebase.utils";
import React from "react";
import { createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />;
          <Route exact path="/shop" component={Shop} />;
          <Route exact path="/sign-in" component={SignInPage} />;
        </Switch>
      </div>
    );
  }
}

export default App;
