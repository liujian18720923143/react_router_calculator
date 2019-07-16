

import { combineReducers } from 'redux';
import Demo from '../containers/demo/reducer';
import Digital from '../containers/demo/component/Digital/reducer';


// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({ /* index, */
    Demo,
    /* Digital */
 });

export default rootReducer;
