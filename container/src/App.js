import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import './App.css';

const One = ({ history }) => {
  return (
    <MicroFrontend history={history} host="http://localhost:3001" name="One" />
  );
};

const Two = ({ history }) => {
  return (
    <MicroFrontend history={history} host="http://localhost:3002" name="Two" />
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/one/*" component={One} />
          <Route exact path="/two/*" component={Two} />
          <Route exact path="*">
            <Redirect to="/one/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
