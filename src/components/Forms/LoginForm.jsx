import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ButtonSubmit } from 'components/Forms/ContactsForm.styled';
import {
  Form,
  Input,
  Label,
  FormWrapper,
  SectionForm,
} from './RegisterForm.styled';

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
    <SectionForm>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Label>
            Email
            <Input
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </Label>

          <Label>
            Password
            <Input
              name="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </Label>

          <ButtonSubmit type="submit">Login</ButtonSubmit>
        </Form>
      </FormWrapper>
    </SectionForm>
  );
};
