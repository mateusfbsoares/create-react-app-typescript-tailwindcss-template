import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./Pages/Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
