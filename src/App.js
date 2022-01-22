import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Auth, { AuthRoute } from './components/Auth';
import RoomDetails from './components/RoomDetails';
import CreateRoom from './pages/CreateRoom';
import AddReservation from './pages/AddReservation';
import * as api from './api/api';

const App = () => {
  useEffect(() => {
    api.loggedInUser();
  }, []);

  return (
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
          path="/room_details"
          element={(<RoomDetails />)}
        />
        <Route
          path="/create_room"
          element={(<CreateRoom />)}
        />
        <Route
          path="/add_reservation"
          element={(<AddReservation />)}
        />
      </Routes>
    </Router>
  );
};
export default App;
