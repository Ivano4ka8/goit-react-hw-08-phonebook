import { NavLink } from 'react-router-dom';
import { Button } from 'components/UserMenu/UserMenu.styled';
import { AuthNavWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <Button>
        <NavLink to="/register">Register</NavLink>
      </Button>

      <Button>
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </AuthNavWrapper>
  );
};
