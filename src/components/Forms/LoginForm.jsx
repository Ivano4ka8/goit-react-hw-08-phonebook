import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        return setEmail(event.target.value);

      case 'password':
        return setPassword(event.target.value);

      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
