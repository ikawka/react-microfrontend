import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import styled from "styled-components/macro";
import "./App.css";

const TwoContainer = styled.div`
  padding: 8px;
`;

const TwoNavigation = styled.div`
  padding: 10px;
  background-color: #fffccc;
  a {
    text-decoration: none;
    padding: 4px;
    color: #000;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

const Home = () => {
  return <TwoContainer>This is App Two home</TwoContainer>;
};

const SomeFeature = () => {
  return <TwoContainer>This some feature in App Two</TwoContainer>;
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <TwoNavigation>
          <div>
            <Link to="/two/">Home</Link>
          </div>
          <div>
            <Link to="/two/some-feature">Two Feature</Link>
          </div>
        </TwoNavigation>
        <Switch>
          <Route exact path="/two/" component={Home} />
          <Route exact path="/two/some-feature" component={SomeFeature} />
          <Route exact path="*">
            <Redirect to="/two/" />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
