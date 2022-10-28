import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searhValue, setSearhValue] = useState('');
  // state = {
  //   searhValue: '',
  // };

  const handleChange = event => {
    const { value } = event.currentTarget;
    setSearhValue(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searhValue.trim() === '') {
      alert('Missing words');
      return;
    }
    onSubmit(searhValue);
    setSearhValue('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.buttonSearch}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          value={searhValue}
          onChange={handleChange}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
