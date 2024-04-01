import { Provider } from 'react-redux';
import ContactList from './ContactList';
import store from '../redux/store.js'
import ContactForm from '../components/ContactForm.jsx'
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
