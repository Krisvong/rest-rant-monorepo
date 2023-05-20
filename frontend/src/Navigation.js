import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {
  const history = useHistory();
  const { currentUser } = useContext(CurrentUser);

  let loginActions = (
    <>
      <li style={{ float: 'right' }}>
        <button onClick={() => history.push("/sign-up")}>
          Sign Up
        </button>
      </li>
      <li style={{ float: 'right' }}>
        <button onClick={() => history.push("/login")}>
          Login
        </button>
      </li>
    </>
  );

  if (currentUser) {
    loginActions = (
      <li style={{ float: 'right' }}>
        Logged in as {currentUser.firstName} {currentUser.lastName}
      </li>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => history.push("/")}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => history.push("/places")}>
            Places
          </button>
        </li>
        <li>
          <button onClick={() => history.push("/places/new")}>
            Add Place
          </button>
        </li>
        {loginActions}
      </ul>
    </nav>
  );
}

export default Navigation;
