import { ContactsItem, ButtonDelete } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactItem = ({ info: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactsItem>
      {name}:<br />
      {number}
      <ButtonDelete type="button" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </ContactsItem>
  );
};
