import React, { PropTypes } from 'react';

function ModelTranslation(props, context) {
  const currentLocale = context.intl.locale;
  const translation = props.translations.find(tr => tr.language === currentLocale);
  let message = translation !== undefined ? translation.message : props.defaultMessage;
  console.log(props);
  console.log(context);
  return (
    <span>{message}</span>
  );
}

ModelTranslation.propTypes = {
  defaultMessage: PropTypes.string.isRequired,
  translations: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
};

ModelTranslation.contextTypes = { intl: PropTypes.object }

export default ModelTranslation;
