import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
