import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
function App() {
  return (
    <>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
