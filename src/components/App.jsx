import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { theme } from 'utils/theme';

import { getContacts, getFilter } from 'redux/selectors';

import { Box } from 'components/common/Box/Box.styled';
import { ContactForm, ContactList, Filter } from './AllComponents';

export function App() {
  const filterValue = useSelector(getFilter);
  const contactsData = useSelector(getContacts);

  //filter contacts on filter value or array of contacts changed
  const filteredContacts = (() => {
    const normalizedFilter = filterValue.toLowerCase().trim();

    if (!normalizedFilter) {
      return [];
    }
    console.log('Filtering...');
    return contactsData.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  // function onContactAdd({ name, number }) {
  //   if (hasContactWithName(name)) {
  //     Notify.warning("Can't add already existing contact");
  //     return;
  //   }

  // }

  // function hasContactWithName(searchName) {
  //   if (!contactsData) return;

  //   const searchNameNormalized = searchName.trim().toLowerCase();

  //   return contactsData.some(
  //     ({ name }) => name.toLowerCase() === searchNameNormalized
  //   );
  // }

  console.log(filteredContacts);
  return (
    <ThemeProvider theme={theme}>
      <Box
        width="wide"
        m={[3]}
        p={[3]}
        textAlign="center"
        borderRadius="small"
        boxShadow="medium"
      >
        <Box margin="0 auto" color="textColored">
          <h1>Phonebook</h1>
          <ContactForm />

          <Box
            width={0.85}
            margin="0 auto"
            mt={[4]}
            borderColor="accentSecondary"
            color="textColoredSecondary"
          >
            <h2>Contacts</h2>
            <Filter />
            <ContactList
              contacts={filterValue ? filteredContacts : contactsData}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
