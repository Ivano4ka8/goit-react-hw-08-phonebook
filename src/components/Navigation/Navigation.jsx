import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Button } from 'components/UserMenu/UserMenu.styled';
import { ProfileNav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ProfileNav>
      <Button>
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn && (
        <Button>
          <NavLink to="/contacts">Contacts</NavLink>
        </Button>
      )}
    </ProfileNav>
  );
};
