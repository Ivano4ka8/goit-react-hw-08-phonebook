import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { ContactList } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} info={contact} />
      ))}
    </ContactList>
  );
};
