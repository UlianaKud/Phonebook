import { useRef, useEffect } from 'react';
import { addContactsThunk } from 'redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import Notiflix from 'notiflix';
import scss from './form.module.scss';
import InputMask from 'react-input-mask';
import { TextField, Button } from '@mui/material';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    input.getSelection();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.target;

    const normalizedname = form.elements.name.value.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedname)
    ) {
      Notiflix.Notify.warning(`${normalizedname} is already in contacts`);
      return;
    }

    dispatch(
      addContactsThunk({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    inputRef.current.setInputValue('');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={scss.form}>
      <div className={scss.inputWrapper}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
          inputProps={{
            className: scss.input,
            name: 'name',
            pattern: '[A-Za-z]{1,32}',
            title: 'Username must be one word',
          }}
        />
        <span></span>
      </div>
      <div className={scss.inputWrapper}>
        <InputMask
          mask="+3\8(999)9999999"
          maskChar=" "
          ref={inputRef}
        >
          {() => (
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              required
              inputProps={{
                className: scss.input,
                name: 'number',
                type: 'tel',
                pattern: '[+]d{2}[(]d{3}[)]d{7}',
                title:
                  'Phone number must have format +38(050)1234567 and can start with +',
              }}
            />
          )}
        </InputMask>
        <span></span>
      </div>
      <Button variant="outlined" type="submit">
        Add Contact
      </Button>
    </form>
  );
};

export default Form;
