import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <Switch>
      <Route to="/" component={Home} />
    </Switch> 
  );
}

export default App;
