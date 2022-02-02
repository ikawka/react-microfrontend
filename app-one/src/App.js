import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import styled from "styled-components/macro";
import "./App.css";

const OneContainer = styled.div`
  padding: 8px;
`;

const OneNavigation = styled.div`
  padding: 8px;
  background-color: #e1e1e1;
  a {
    text-decoration: none;
    padding: 4px;
    color: #333;
  }
`;

const Home = () => {
  return <OneContainer>This is App One home</OneContainer>;
};

const SomeFeature = () => {
  return <OneContainer>This some feature in App One</OneContainer>;
};

function App() {
  return (
    <BrowserRouter>
      <>
        <OneNavigation>
          <Link to="/one/">Home</Link>
          <Link to="/one/some-feature">Feature</Link>
        </OneNavigation>
        <Switch>
          <Route exact path="/one/" component={Home} />
          <Route exact path="/one/some-feature" component={SomeFeature} />
          <Route exact path="*">
            <Redirect to="/one/" />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
