import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';
/**
 * The <Grid /> component will most often be the first
 * child of <Section /> and is responsible for holding
 * and properly templating all the <GridItem /> contents,
 * which it expects as children.
*/
const Grid = (props) => {
  const classes = [
    'Grid',
    props.middle ? 'Grid--middle' : '',
    props.center ? 'Grid--center' : '',
    props.stretch ? 'Grid--stretch' : ''
  ];

  return (
    <div className={(classes).join(' ')}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  /* This must always be a <GridItem /> */
  children: PropTypes.node,
  /* Centers the contents of the grid on the horizontal plane */
  middle: PropTypes.bool,
  /* Centers the contents of the grid on the vertical plane */
  center: PropTypes.bool,
  /* Ensures neighbouring gridItems run top-to-bottom */
  stretch: PropTypes.bool
};

export default Grid;
