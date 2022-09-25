import { Card, CardContent, Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const handleAddContact = (value) => {
    console.log('value', value)
    setContacts([...contacts, value])
  }

  return (
    <div className='App'>
      <Header />
      <Grid container style={{ padding: '40px 0' }}>
        <Grid item md={6}>
          <ContactForm fnAddContact={(value) => handleAddContact(value)} />
        </Grid>
        <Grid item md={6}>
          <Card sx={{ maxWidth: 600, backgroundColor: '#C6EBC5' }}>
            <CardContent>
              {contacts.map((contact, index) => (
                <Contact
                  key={index}
                  data = {contact}
                />
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
