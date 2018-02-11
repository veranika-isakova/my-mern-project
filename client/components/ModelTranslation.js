import React, { PropTypes } from 'react';

function ModelTranslation(props, context) {
  return (
  );
}

ModelTranslation.propTypes = {
  defaultMessage: PropTypes.string.isRequired,
  translations: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
};

export default ModelTranslation;
