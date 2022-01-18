import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Auth, { AuthRoute } from './components/Auth';
import CreateRoom from './pages/CreateRoom';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={(
          <Auth>
            <Home />
          </Auth>
        )}
      />
      <Route
        path="/users/login"
        element={(
          <AuthRoute>
            <LogIn />
          </AuthRoute>
        )}
      />
      <Route
        path="/users/signup"
        element={(
          <AuthRoute>
            <SignUp />
          </AuthRoute>
        )}
      />

      <Route
        path="/create_room"
        element={(
          <Auth>
            <CreateRoom />
          </Auth>
        )}
      />
    </Routes>
  </Router>
);

export default App;
