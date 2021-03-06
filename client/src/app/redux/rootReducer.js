import {combineReducers} from 'redux';
import auth from '../../auth/redux/reducers';
import boards from '../../boards/redux/reducers';
import lists from '../../lists/redux/reducers';
import tasks from '../../tasks/redux/reducers';
import ui from '../../ui/redux/reducers';

const rootReducer = combineReducers({
  auth,
  boards,
  lists,
  tasks,
  ui,
});

export default rootReducer;
