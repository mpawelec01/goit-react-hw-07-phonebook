import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts =
    filter !== ''
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <ul>
      {filteredContacts?.map(item => (
        <ContactListItem
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
