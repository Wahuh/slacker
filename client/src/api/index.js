import {getBoard, postUserBoard, getUserBoards} from './boards.api';
import {getUser} from './me.api';
import {login, signup} from './auth.api';
import {postList, getLists} from './lists.api';
import {postTask, getTasks} from './tasks.api';

export default {
  postList,
  getUserBoards,
  postUserBoard,
  getBoard,
  getLists,
  getUser,
  postTask,
  getTasks,
  login,
  signup,
};
