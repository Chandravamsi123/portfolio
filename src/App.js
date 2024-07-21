import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default App;
