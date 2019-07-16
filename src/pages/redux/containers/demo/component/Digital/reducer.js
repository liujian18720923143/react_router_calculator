/* 

import * as actions from './action';

export const init={
    pre:'0',
    cur:'0',
    result:'0',
    operator:false,
    expression:''
};
export default function index(state=init,action){
    //规则
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
        {
            if(state.cur==='0'||state.operator===true){
                console.log(state.cur)
                state.operator=false;
                state.expression+=action.data;
                state.pre=state.result;
                state.result=action.data;
                state.cur=state.result;
            }else{
                console.log(state.cur)
                state.expression+=action.data;
                state.result=state.cur+action.data;
                state.cur=state.result;
            }
            return Object.assign({},state);
        }
        default :
            return state;
   }
}; */