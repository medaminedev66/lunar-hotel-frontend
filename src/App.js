/* eslint-disable react/jsx-wrap-multilines */
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Auth, { AuthRoute } from './components/Auth';
import RoomDetails from './components/RoomDetails';
import CreateRoom from './pages/CreateRoom';
import MyReservation from './pages/MyReservations';
import AddReservation from './pages/AddReservation';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={
          <Auth>
            <Home />
          </Auth>
        }
      />
      <Route
        path="/users/login"
        element={
          <AuthRoute>
            <LogIn />
          </AuthRoute>
        }
      />
      <Route
        path="/users/signup"
        element={
          <AuthRoute>
            <SignUp />
          </AuthRoute>
        }
      />
      <Route
        path="/room_details/:id"
        element={(
          <Auth>
            <RoomDetails />
          </Auth>
        )}
      />
      <Route
        path="/create_room"
        element={
          <Auth>
            <CreateRoom />
          </Auth>
        }
      />
      <Route
        path="/reservations"
        element={
          <Auth>
            <MyReservation />
          </Auth>
        }
      />

      <Route
        path="/add_reservation"
        element={
          <Auth>
            <AddReservation />
          </Auth>
        }
      />
    </Routes>
  </Router>
);

export default App;
