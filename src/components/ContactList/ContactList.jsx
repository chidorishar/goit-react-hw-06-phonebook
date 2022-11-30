import { PropTypes } from 'prop-types';

import { ContactsList } from './ContactList.styled';

import { ContactListItem } from './ContactListItem/ContactListItem';

export function ContactList({ contacts }) {
  return (
    <ContactsList>
      {contacts.map(contactData => (
        <ContactListItem key={contactData.id} contactData={contactData} />
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
