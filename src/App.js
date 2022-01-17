import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Home />
        </div>
      </Route>
    </Switch>
  </Provider>
);

export default App;
