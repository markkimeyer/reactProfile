import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route component= {NoMatch} />
          </Switch>
          <Footer>
      </Footer>
      </div>
     
    </Router>
  );
}

export default App;
