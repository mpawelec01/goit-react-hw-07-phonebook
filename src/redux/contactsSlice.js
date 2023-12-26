import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const storedItems = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsInitialState = {
  contacts: storedItems,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
