import React from 'react';
import classes from './search.module.css';
import classNames from 'classnames';
const Search = (props) => {
  const {
    value,
    onChange,
    children = 'Search',
    placeholder = 'search...',
  } = props;

  const inputClass = classNames({
    [classes.input]: true,
    [classes.filled]: value,
  });
  return (
    <label className={classes.label}>
      {children}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
};

export default Search;
