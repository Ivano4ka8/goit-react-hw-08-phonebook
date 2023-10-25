import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {selectIsLoggedIn && <NavLink to="/contacts">Tasks</NavLink>}
    </nav>
  );
};
