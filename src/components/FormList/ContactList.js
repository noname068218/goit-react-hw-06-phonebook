import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactListSlice';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <Button
            variant="dark"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
