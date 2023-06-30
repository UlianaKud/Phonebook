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
import { Avatar, Button, List, ListItem } from '@mui/material';

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
  }, [dispatch, token]);

  const onDeleteContact = contactsId => {
    dispatch(deleteContactsThunk(contactsId));
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <List className={scss.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ListItem key={`${number}-${name}`}>
              <div className={scss.contactWrapper}>
                <Avatar className={scss.contactAvatar} alt={name}>
                  {name?.[0]?.toUpperCase()}
                </Avatar>
                <div className={scss.contactData}>
                  <span className={scss.contactName}>{name}:</span>
                  <span className={scss.number}>{number}</span>
                </div>
              </div>
              <Button
                variant="outlined"
                type="button"
                className={scss.button}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
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
