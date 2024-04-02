import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {contactsReducer} from "./contactsSlice.js"
import {filtersReducer} from "./filtersSlice.js"

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
}
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)
export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    },
});
export default store
export const persistor = persistStore(store)