import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './AppBar';

function Section({ children }) {
  return (
    <section>
      <AppBar />
      <hr />
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Section;
