import { ThemeProvider } from '@emotion/react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { theme } from 'utils/theme';

import { Box } from 'components/common/Box/Box.styled';
import { ContactForm, ContactList, Filter } from './AllComponents';

export function App() {
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
            <ContactList />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
