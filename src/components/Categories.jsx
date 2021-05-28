import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import '../styles/categories.css'

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleCategories = this.handleCategories.bind(this);
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    api.getCategories().then((data) => {
      this.setState({ categories: data });
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <ol className="categories-list">
          <h2>Categorias</h2>
          {categories.map((category) => (
            <li key={ category.id }>
              <input
                data-testid="category"
                type="radio"
                id={ category.id }
                name="categorias"
                onClick={ onClick }
              />
              {category.name}
            </li>))}
            <br></br>
        </ol>
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Categories;