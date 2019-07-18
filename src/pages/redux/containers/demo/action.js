export const action0={
    type:'0',
    data:'0'
}
export const action1={
    type:'1',
    data:'1'
}
export const action2={
    type:'2',
    data:'2'
}
export const action3={
    type:'3',
    data:'3'
}
export const action4={
    type:'4',
    data:'4'
}
export const action5={
    type:'5',
    data:'5'
}
export const action6={
    type:'6',
    data:'6'
}
export const action7={
    type:'7',
    data:'7'
}
export const action8={
    type:'8',
    data:'8'
}
export const action9={
    type:'9',
    data:'9'
}
export const action10={
    type:'AC',
}
export const action11={
    type:'.',
}
export const action12={
    type:'+',
}
export const action13={
    type:'-',
}
export const action14={
    type:'*',
}
export const action15={
    type:'/',
}
export const action16={
    type:'=',
}
export const action17={
    type:'+/-',
}
export const action18={
    type:'%',
}
export const action19={
    type:'functional13',
}
export const action20={
    type:'functional14',
}
export const action21={
    type:'functional15',
}
export const action22={
    type:'functional16',
}
export const action23={
    type:'functional17',
}
export const action24={
    type:'functional18',
}


let actions=[action0,action1,action2,action3,action4,action5,action6,action7,action8,action9]
export function clickDigital(index){
    
    return(dispatch,getState)=>{
        const { Demo } = getState();
        let { ac, cur, result, operator, expression, operands1,operands2, operators }= Demo;
        if(ac){
            if(!isNaN(index)){
                //单击数字
                result+=index;//1
                operands1=result;//1
                cur=result;//1
                expression+=index;//1
                ac=false;
            }else if(index=='.'){
                //单击小数点
                result=cur+index;
                operands1=result;
                cur=result;
                expression=result;
                ac=false;
            }else if(index=='+'||index=='-'||index=='*'||index=='/'||index=='functional16'){
                operands1='0';
                operator=true;
                operators=index;
                expression='0'+index;
                ac=false;
            }
        }else{
            if(!isNaN(index)){
                //单击数字
                console.log(operator)//false
                if(operator){
                    operator=false;
                    result=String(index);//3
                    console.log('result',result)
                    operands2=result;//3
                    cur=result;//3
                    expression+=index;//1+3
                }else{
                    if(expression[expression.length-1]=='='||expression[expression.length-1]=='+/-'||expression[expression.length-1]=='%'||expression[expression.length-1]=='1/x'||expression[expression.length-1]=='2√ x'||expression[expression.length-1]=='3√ x'||expression[expression.length-1]=='y√ x'||expression[expression.length-1]=='In'||expression[expression.length-1]=='log10'){
                        console.log(2)
                        result=index;
                        cur=result;
                        operands1=result;
                        operands2='';
                        operators='';
                        expression+=index;
                    }else{
                        if(operands2){
                            if(operands2=='0'){
                                result='';
                            }
                            result+=index;
                            operands2=result;
                            cur=result;
                            expression+=index;
                        }else{
                            if(operands1=='0'){
                                result='';
                            }
                            result+=index;
                            operands1=result;
                            cur=result;
                            expression+=index;
                        }
                    }
                    
                }
            }else if(index=='.'){
                //单击小数点
                if(operator){
                    result='0.';
                    operands2=result;
                    cur=result;
                    expression+=index;
                }else{
                    if(operands2){
                        if(operands2.indexOf('.')==-1){
                            result+=index;
                            operands2=result;
                            cur=result;
                            expression+=index;
                        }
                    }else{
                        if(operands1.indexOf('.')==-1){
                            result+=index;
                            operands1=result;
                            cur=result;
                            expression+=index;
                        }
                    }
                }
                console.log('小数点',operands1,operands2)
                operator=false;
            }else if(index=='AC'){
                cur='0';
                result='';
                operands1='';
                operands2='';
                operator=false;
                operators='';
                expression='';
                ac=true;
            }else if(index=='+'||index=='-'||index=='*'||index=='/'||index=='functional16'){
                operator=true;
                if(operands2){
                    if(index=='functional16'){
                        result=Math.log(operands1)/Math.log(operands2);
                        cur=result;
                        expression+=index;
                    }else{
                        result=eval(operands1+operators+operands2);
                        operands1=result;
                        cur=result;
                    }
                    
                }
                operators=index;
                expression+=index;
            }else if(index=='='){
                if(operator){
                    operands2=operands1;
                    operands1=cur;
                    if(operator=='funcional16'){
                        result=Math.log(operands1)/Math.log(operands2)
                    }else{
                        result=eval(operands1+operators+operands2);
                    }
                }else{
                    if(expression[expression.length-1]=='='){
                        operands1=cur;
                    }
                    if(operators=='functional16'){
                        result=Math.log(operands1)/Math.log(operands2)
                    }else{
                        result=eval(operands1+operators+operands2);
                    }
                    
                }
                expression+=index;
                cur=result;
                operator=false;
            }else if(index=='%'){
                result=Number(operands1)/100;
                cur=result;
                operands1=cur;
                expression+=index;
                operator=false;
            }else if(index=='+/-'){
                result=-Number(operands1);
                cur=result;
                operands1=cur;
                expression+=index;
                operator=false;
            }else if(index=='functional13'){
                operands1=cur;
                result=1/Number(operands1);
                cur=result;
                expression+=index;
                operator=false;
            }else if(index=='functional14'){
                operands1=cur;
                result=Math.sqrt(operands1);
                cur=result;
                expression+=index;
                operator=false;
            }else if(index=='functional15'){
                operands1=cur;
                result=Math.cbrt(operands1);
                cur=result;
                expression+=index;
                operator=false;
            }else if(index=='functional17'){
                operands1=cur;
                result=Math.log(operands1);
                cur=result;
                expression+=index;
                operator=false;
            }else if(index=='functional18'){
                operands1=cur;
                result=Math.log10(operands1);
                cur=result;
                expression+=index;
                operator=false;
            }
        }
        dispatch({
            type:String(index),
            data:{
                operands1, operands2, cur, result, operator, expression, ac, operators
            }
        })
    }
}



