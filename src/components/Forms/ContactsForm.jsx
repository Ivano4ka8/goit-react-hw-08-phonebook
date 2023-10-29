import {
  Form,
  FormLabel,
  FormInput,
  ButtonSubmit,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/selectors';
import { FormWrapper } from './RegisterForm.styled';

import { toast } from 'react-toastify';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isExist = contacts.find(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isExist) {
      toast.info('You have already had this name');
      form.reset();
      return;
    }

    dispatch(
      addContacts({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <FormWrapper>
        <Form onSubmit={onFormSubmit}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Phone
            <FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </FormWrapper>
    </>
  );
};
