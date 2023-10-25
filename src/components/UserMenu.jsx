import { IoLogOutOutline } from 'react-icons/io5';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{selectUser.name}</p>
      <button type="button" onClick={() => dispatch(logOut)}>
        <IoLogOutOutline />
        LogOut
      </button>
    </div>
  );
};
