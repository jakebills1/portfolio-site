import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import Resume from './components/Resume';
function App() {
  return (
    <>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
