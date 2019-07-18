
import * as actions from './action'
export const init={
    cur:'0',
    result:'',
    operands1:'',
    operands2:'',
    operator:false,
    operators:'',
    expression:'',
    ac:true
};
/* function index(state=init,action){
    console.log('reducer',state)
   if(Boolean(action.type)==true){
    console.log('action.type',action.type)
            state=action.data
            return Object.assign({},{...state});
    }
    return state;
}; */
function index(state=init,action){
   switch(action.type){
        case actions.action0.type:
        case actions.action1.type:
        case actions.action2.type:
        case actions.action3.type:
        case actions.action4.type:
        case actions.action5.type:
        case actions.action6.type:
        case actions.action7.type:
        case actions.action8.type:
        case actions.action9.type:
        case actions.action10.type:
        case actions.action11.type:
        case actions.action12.type:
        case actions.action13.type:
        case actions.action14.type:
        case actions.action15.type:
        case actions.action16.type:
        case actions.action17.type:
        case actions.action18.type:
        case actions.action19.type:
        case actions.action20.type:
        case actions.action21.type:
        case actions.action22.type:
        case actions.action23.type:
        case actions.action24.type:
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