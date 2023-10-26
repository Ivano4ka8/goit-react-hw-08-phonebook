import { IoLogOutOutline } from 'react-icons/io5';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(logOut)}>
        <IoLogOutOutline />
        LogOut
      </button>
    </div>
  );
};
