import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

function ProductListItem(props, context) {
  return (
    <div>
      <FormattedMessage id="productName" />: {props.name} <br/>
      <FormattedMessage id="addedDate" />: {props.dateAdded}
    </div>
  );
}

ProductListItem.propTypes = {
};

export default ProductListItem;
