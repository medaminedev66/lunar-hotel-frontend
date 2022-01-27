import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCurrentUser, logout } from '../redux/auth';

const NavPanel = () => {
  const isAuthenticated = useSelector(loadCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout);
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
  ];

  return (
    <section>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="nav-link the-nav pt-0 pb-0 float-left text-black">
              <NavLink activeclassname="active" to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}

          {isAuthenticated && (
            <li className="log-out">
              <a href="/" className="nav-link text-black button text-center" type="button" onClick={handleLogout}>Log Out</a>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default NavPanel;
