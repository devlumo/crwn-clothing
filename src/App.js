import "./App.css";
import Homepage from "./pages/hompage/Homepage";
import { Route } from "react-router-dom";

function App() {
  return <Route exact path="/" component={Homepage}></Route>;
}

export default App;
