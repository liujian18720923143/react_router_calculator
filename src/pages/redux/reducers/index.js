

import { combineReducers } from 'redux';
import Calculator from '../containers/demo/reducer';


// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({ /* index, */
    Calculator,
 });

export default rootReducer;
