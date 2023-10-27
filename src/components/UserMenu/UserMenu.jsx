import { IoLogOutOutline } from 'react-icons/io5';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Button, UserMenuWrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserMenuWrapper>
      <UserName>{user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <IoLogOutOutline />
        LogOut
      </Button>
    </UserMenuWrapper>
  );
};
