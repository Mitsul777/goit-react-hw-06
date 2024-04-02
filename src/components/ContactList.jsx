import Contact from "./Contact.jsx";
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css'

function ContactList() {
    const contacts = useSelector(state => {
        const { contacts, filters } = state;
        const { nameFilter } = filters;
        return contacts.filter(contact => contact.name.includes(nameFilter));
    });

    return (
        <div>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} />
            ))}
        </div>
    );
}

export default ContactList;