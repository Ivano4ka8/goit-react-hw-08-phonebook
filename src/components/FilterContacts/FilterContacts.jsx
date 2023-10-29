import { FormLabel } from 'components/Forms/ContactsForm.styled';
import { FilterWrapper, FilterInput } from './FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <FilterWrapper>
      <FormLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FormLabel>
    </FilterWrapper>
  );
};
