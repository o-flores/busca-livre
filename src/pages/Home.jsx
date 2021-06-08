import React from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { getProductsListThunk } from '../actions';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleOnChange = ({ target: { value }}) => {
    this.setState({ query: value });
  }

  handleClick = () => {
    const { getProductsList, categoryId } = this.props;
    const { query } = this.state;
    getProductsList({ categoryId, query })
  }

  // handleProductsList = () => {
  //   const { query, categoryId } = this.state;
  //   this.setState({ loading: true, products: [] }, async () => {
  //     const { results } = await api.getProductsFromCategoryAndQuery(categoryId, query);
  //     if (results.length === 0) this.setState({ products: 'none' });
  //     else this.setState({ products: results });
  //     this.setState({ loading: false });
  //   });
  // }

  // handleRadio = (event) => {
  //   const { id } = event.target;
  //   this.setState({ categoryId: id }, () => this.handleProductsList());
  // }

  render() {
    const { query } = this.state;
    const { products, loading } = this.props;
    return (
      <>
        <SearchBar
          value={ query }
          onClick={ this.handleClick }
          onChange={ this.handleOnChange }
        />
        <Categories onClick={ this.handleRadio } />
        { loading && <Loading /> }
        <ProductList products={ products } />
      </>
    );
  }
}

const mapStateToProps = ({ProductsListReducer: { products, loading }, categoriesReducer: { categoryId }}) => ({
  products,
  loading,
  categoryId,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsList: (payload) => dispatch(getProductsListThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
