import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'contacts',
  storage,
};
const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(contactData) {
        return { payload: { ...contactData, id: nanoid() } };
      },
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
