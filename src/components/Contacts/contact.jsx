import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  visibleContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { deleteContactsThunk, fetchContactsThunk } from 'redux/thunks';
import scss from './contact.module.scss';
import { setToken } from 'api/auth';
import { Avatar, Button } from '@mui/material';

const Contact = () => {
  const { token } = useSelector(state => ({
    token: state.auth.token,
  }));
  const contacts = useSelector(visibleContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(token);
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const onDeleteContact = contactsId => {
    dispatch(deleteContactsThunk(contactsId));
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul className={scss.contactList}>
        {contacts.map(({ id, name, number }, index) => {
          return (
            <li key={`${number}-${name}`} className={scss.contactItem}>
              <div className={scss.contactWrapper}>
                <Avatar
                  alt={name}
                  src={`/static/images/avatar/${index + 1}.jpg`}
                />
                <span>{name}:</span>
                <span className={scss.number}>{number}</span>
                <Button
                  variant="outlined"
                  type="button"
                  className={scss.button}
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contact;
