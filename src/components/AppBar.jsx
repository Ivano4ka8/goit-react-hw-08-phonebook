import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      {selectIsLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
