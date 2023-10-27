import { motion } from 'framer-motion';
import { ContactsList } from 'components/ContactsList/ContactList';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader/Loader';
import { ContactsForm, FilterContacts } from 'components';

export default function ContactsBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <motion.div>Now, your book of contacts is empty</motion.div>
      {isLoading && <Loader />}
      <ContactsForm />
      <FilterContacts />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
}
