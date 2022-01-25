import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import PrivateWorkshop from "./components/Privateworkshop";
import PrivateLesson from "./components/Privatelesson";
import Workshop from "./components/Workshop";
import Tetra from "./components/Tetra";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/PrivateWorkshop" component={PrivateWorkshop} />
          <Route exact path="/PrivateLesson" component={PrivateLesson} />
          <Route exact path="/Workshop" component={Workshop} />
          <Route exact path="/Tetra" component={Tetra} />
        </Switch>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
