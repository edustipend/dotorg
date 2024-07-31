import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const SeoFragment = ({
  description = 'Resources and financial support for your learning',
  image = 'https://firebasestorage.googleapis.com/v0/b/edustipenddotorg.appspot.com/o/assets%2Fedustipend-icon.png',
  name = 'Edustipend',
  title = 'Edustipend.org - Resources and financial support for your learning',
  type = 'summary',
  website = 'www.edustipend.org'
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={website} />
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
};

SeoFragment.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  website: PropTypes.string
};
