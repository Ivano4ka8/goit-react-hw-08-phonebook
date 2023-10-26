import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);

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
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
            pattern="\w{3,16}"
          />
        </label>

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
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
};
