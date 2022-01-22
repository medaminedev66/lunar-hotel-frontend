import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as api from '../api/api';

const NavPanel = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = api.loggedInUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    api.logout();
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/reservations',
      text: 'My Reservations',
    },
    {
      id: 3,
      path: '/create_room',
      text: 'Create Room',
    },
    {
      id: 4,
      path: '/room_details',
      text: 'Room Details',
    },
  ];

  return (
    <section>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}
          {currentUser && (
          <li>
            <a href="/" className="nav-link" onClick={logOut}>
              Log Out
            </a>
          </li>
          )}
        </ul>

      </nav>
    </section>
  );
};

export default NavPanel;
