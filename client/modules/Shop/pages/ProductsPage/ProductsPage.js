import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from '../../components/ProductListItem/ProductListItem'
import { fetchProducts} from '../../ShopActions'
import { getProducts } from '../../ShopReducer';
import { FormattedMessage } from 'react-intl';

class ProductsPage extends Component {
  componentDidMount() {
    if (!this.props.initialLoadComplete) {
      this.props.dispatch(fetchProducts());
    }
  }

  render() {
    return (
      <div>
          <FormattedMessage id="products" />:
          {
            this.props.data.map((product) => (
              <ProductListItem
                {...product} key={product._id}
              />
            ))
          }
        </div>
    );
  }
}
ProductsPage.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    ...state.shop,
  };
}



export default connect(mapStateToProps)(ProductsPage);
