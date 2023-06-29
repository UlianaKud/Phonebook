import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilterFild } from '../../redux/filterSlice';
import scss from './filter.module.scss';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = evt => {
    const { value } = evt.target;
    dispatch(changeFilterFild(value));
  };
  return (
    <TextField
      id="outlined-basic"
      label="Find contact by name"
      variant="outlined"
      className={scss.input}
      type="text"
      name="filter"
      onChange={handleChangeFilter}
    />
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
