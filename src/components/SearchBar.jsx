import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onClick, onChange, value } = this.props;
    return (
      <div>
        <input
          value={ value }
          data-testid="query-input"
          type="text"
          onChange={ onChange }
        />
        <button data-testid="query-button" type="button" onClick={ onClick }>
          Pesquisar
        </button>
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
