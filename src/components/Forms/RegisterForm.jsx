import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ButtonSubmit } from 'components/Forms/ContactsForm.styled';
import {
  Form,
  Input,
  Label,
  FormWrapper,
  SectionForm,
} from './RegisterForm.styled';

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
    <SectionForm>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Label for="name">
            Name{' '}
            <Input
              id="name"
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </Label>

          <Label for="email">
            Email
            <Input
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </Label>

          <Label for="password">
            Password
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </Label>

          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Form>
      </FormWrapper>
    </SectionForm>
  );
};
