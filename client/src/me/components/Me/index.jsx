import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Board from '../../../boards/components/Board';
import BoardsList from '../../../boards/components/BoardsList';

const Me = ({match}) => {
  return (
    <div>
      <Route exact path={`${match.path}/boards`} component={BoardsList} />
      <Route path={`${match.path}/boards/:board_id`} component={Board} />
    </div>
  );
};

Me.propTypes = {
  match: PropTypes.objectOf({path: PropTypes.string}).isRequired,
};

export default Me;
