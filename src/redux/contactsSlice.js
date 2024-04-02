import { createSlice, nanoid } from '@reduxjs/toolkit';
import {useSelector} from "react-redux";

const contactsInitialState = {
    items: [],
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        id: nanoid(),
                        number,
                    }
                };
            }
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
