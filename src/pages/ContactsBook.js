import { motion } from 'framer-motion';
import { ContactsList } from 'components/ContactsList/ContactList';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader';

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
      {contacts.length > 0 && <ContactsList />}
    </>
  );
}
