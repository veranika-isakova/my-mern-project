import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import ModelTranslation from '../../../../components/ModelTranslation'

function ProductListItem(props, context) {
  return (
    <div>
      <FormattedMessage id="productName" />: <ModelTranslation {...props.name}/> <br/>
      <FormattedMessage id="addedDate" />: {props.dateAdded}
    </div>
  );
}

ProductListItem.propTypes = {
};

export default ProductListItem;
