import Contacts from './Contacts'
import {useEffect, useState} from 'react'

export default function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() =>  {
    const getContacts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await response.json();
      setContacts(data.sort((a, b) => a.name.localeCompare(b.name)));
    }

    getContacts();
  }, [])

  return (
    <div id="contacts">
      <header>
        <h1 style = {{fontSize: '40px', textAlign: 'center'}}>Contacts</h1>
      </header>
      
      <Contacts contacts = {contacts} />
    </div>
  );
}
