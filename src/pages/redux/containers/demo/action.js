

import { ajax, nameSpace } from 'utils/index';




export const action0={
    type:'DIGITAL_0',
    data:'0'
}
export const action1={
    type:'DIGITAL_1',
    data:'1'
}
export const action2={
    type:'DIGITAL_2',
    data:'2'
}
export const action3={
    type:'DIGITAL_3',
    data:'3'
}
export const action4={
    type:'DIGITAL_4',
    data:'4'
}
export const action5={
    type:'DIGITAL_5',
    data:'5'
}
export const action6={
    type:'DIGITAL_6',
    data:'6'
}
export const action7={
    type:'DIGITAL_7',
    data:'7'
}
export const action8={
    type:'DIGITAL_8',
    data:'8'
}
export const action9={
    type:'DIGITAL_9',
    data:'9'
}

let actions=[action0,action1,action2,action3,action4,action5,action6,action7,action8,action9]
export function clickDigital(index){
    return(dispatch,getState)=>{
        dispatch(actions[index])
    }
}



