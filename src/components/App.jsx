import { Provider } from 'react-redux';
import ContactList from './ContactList/ContactList.jsx';
import {store} from '../redux/store.js'
import ContactForm from './ContactForm/ContactForm.jsx'
import './App.css'
import SearchBox from "./SearchBox/SearchBox.jsx";
function App() {
    return (
        <Provider store={store}>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </Provider>
    );
}

export default App;
