import Form from '../Form/Form';
import Contact from '../Contacts/contact';
import Filter from '../Filter/filter';
import UserMenu from '../UserMenu/UserMenu';
import scss from './home.module.scss';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div className={scss.wrapper}>
      <UserMenu />
      <div className={scss.phonebook}>
        <Typography
          className={scss.headerPhonebook}
          align="center"
          component="div"
          variant="h1"
        >
          Phonebook
        </Typography>
        <Form />
        <div className={scss.contacts}>
          <Typography
            className={scss.headerContacts}
            align="center"
            component="div"
            variant="h2"
          >
            Contacts
          </Typography>
          <Filter />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
