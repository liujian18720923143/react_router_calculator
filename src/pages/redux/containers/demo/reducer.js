
import * as actions from './action'
export const init={
    cur:0,
};
/**
    @author 刘健
    这是一个修改state的函数
* */
function index(state=init,action){
   switch(action.type){
        case actions.clickEvent[0] :
        case actions.clickEvent[1] :
        case actions.clickEvent[2] :
        case actions.clickEvent[3] :
        case actions.clickEvent[4] :
        case actions.clickEvent[5] :
        case actions.clickEvent[6] :
        case actions.clickEvent[7] :
        case actions.clickEvent[8] :
        case actions.clickEvent[9] :
        case actions.clickEvent[10] :
        case actions.clickEvent[11] :
        case actions.clickEvent[12] :
        case actions.clickEvent[13] :
        case actions.clickEvent[14] :
        case actions.clickEvent[15] :
        case actions.clickEvent[16] :
        case actions.clickEvent[17] :
        case actions.clickEvent[18] :
        case actions.clickEvent[19] :
        case actions.clickEvent[20] :
        case actions.clickEvent[21] :
        case actions.clickEvent[22] :
        case actions.clickEvent[23] :
        case actions.clickEvent[24] :
        {
            console.log(action.type);
            state=action.data
            return Object.assign({},{...state});
        }
        default :
            return state;
   }
};
export default index;