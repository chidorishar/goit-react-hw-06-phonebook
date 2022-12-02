import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};
const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload: idToDelete }) => ({
      contacts: state.contacts.filter(({ id }) => id !== idToDelete),
    }),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
