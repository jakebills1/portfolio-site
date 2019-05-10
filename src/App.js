import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
function App() {
  document.body.style.background = "black";
  return (
    <>
      <Container style={{backgroundColor: "black",}}>
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
