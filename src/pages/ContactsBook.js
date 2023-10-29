import { ContactsList } from 'components/ContactsList/ContactList';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader/Loader';
import { ContactsForm, FilterContacts } from 'components';
import {
  ContactsBookWrapper,
  ContactsListWrapper,
} from 'components/ContactsList/ContactList.styled';
import { Section } from 'components/Section/Section.styled';
import { FormWrapper } from 'components/Forms/RegisterForm.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactsBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section>
      <ToastContainer />
      <ContactsBookWrapper>
        {isLoading && <Loader />}
        <ContactsForm />

        {contacts.length > 0 ? (
          <ContactsListWrapper>
            <FilterContacts />
            <ContactsList />
          </ContactsListWrapper>
        ) : (
          <FormWrapper>
            Now, you don't have any contact. Please add contact to your Phone
            Book!
          </FormWrapper>
        )}
      </ContactsBookWrapper>
    </Section>
  );
}
