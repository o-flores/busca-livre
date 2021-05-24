import React from 'react';
import PropTypes from 'prop-types';
import '../styles/searchbar.css';
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
  render() {
    const { onClick, onChange, value } = this.props;
    return (
      <div className='container'>
        <div id='search-div'>
          <input
            value={value}
            type="text"
            onChange={onChange}
            placeholder='Digite um produto'
          />
          <button className='search-button' type="button" onClick={onClick}>
            <FaSearch />
          </button>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default SearchBar;
