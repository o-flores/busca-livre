import React from 'react';
import PropTypes from 'prop-types';
import '../styles/categories.css';
import { connect } from 'react-redux';
import { getCategoriesListThunk, getSelectedCategory } from '../actions';

class Categories extends React.Component {

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    const { categories, getSelectedCategory } = this.props;
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
                onClick={ () => getSelectedCategory(category.id) }
              />
              {category.name}
            </li>))}
            <br></br>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({categoriesReducer: { categories, error }}) => ({
  categories,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategoriesListThunk()),
  getSelectedCategory: (id) => dispatch(getSelectedCategory(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Categories);


Categories.propTypes = {
  onClick: PropTypes.func,
}.isRequired;
