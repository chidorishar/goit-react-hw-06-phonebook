import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from 'redux/contactsSlice';

import {
  AddContactButton,
  AddContactForm,
  InputInfoLabel,
  ContactInput,
} from './ContactForm.styled';

const INPUTS_NAMES = {
  name: 'name',
  number: 'number',
};

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const onInput = e => {
    let setStateFunc = null;
    const { name: inputName, value: inputValue } = e.target;

    switch (inputName) {
      case INPUTS_NAMES.name:
        setStateFunc = setName;
        break;
      case INPUTS_NAMES.number:
        setStateFunc = setNumber;
        break;

      default:
        return;
    }

    setStateFunc(inputValue);
  };

  return (
    <AddContactForm onSubmit={onSubmit}>
      <InputInfoLabel>
        Name
        <ContactInput
          type="text"
          name={INPUTS_NAMES.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoFocus
          onInput={onInput}
          value={name}
        ></ContactInput>
      </InputInfoLabel>
      <InputInfoLabel>
        Number
        <ContactInput
          type="tel"
          name={INPUTS_NAMES.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInput}
          value={number}
        ></ContactInput>
      </InputInfoLabel>
      <AddContactButton type="submit" cursor="cross">
        Add contact
      </AddContactButton>
    </AddContactForm>
  );
}
