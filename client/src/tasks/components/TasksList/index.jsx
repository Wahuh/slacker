import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectTasks} from '../../redux/selectors';

const TasksList = ({tasks}) => {
  return <ul>{tasks.map(task => task.title)}</ul>;
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf({id: PropTypes.number, title: PropTypes.string}),
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  tasks: selectTasks(state, ownProps.list_id),
});

export default connect(mapStateToProps)(TasksList);