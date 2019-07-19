export const clickEvent=['1','2','3','4','5','6','7','8','9','0','.','+','-','*','/','=','+/-','AC','%','reciprocal','quareRoot','cubeRoot','yRootOfx','naturalLogarithm','naturalLogarithm'];

let expression='', operator=false, ac=true, result='', operands1='', operands2='', operators='';
/**
    @author 刘健
    这是一个处理state值的函数
* */
export function clickDigital(operation){
    return(dispatch,getState)=>{
        let { cur }= getState().Calculator;
        let arr1=['+','-','*','/','yRootOfx'];
        let arr2=['%','+/-','reciprocal','quareRoot','cubeRoot','naturalLogarithm','logarithmBasedOnTen'];
        let arr=['=','+/-','%','1/x','2√ x','3√ x','y√ x','In','log10'];
        if(ac){
            if(!isNaN(operation)){
                //单击数字
                console.log('shuzi')
                result+=operation;
                operands1=result;
                cur=result;
                expression+=operation;
                console.log(expression);
            }else if(operation=='.'){
                //单击小数点
                result=cur+operation;
                operands1=result;
                cur=result;
                expression=result;
            }else if(arr1.indexOf(operation)>-1){
                operands1='0';
                operator=true;
                operators=operation;
                expression='0'+operation;
            }
            ac=false;
        }else{
            console.log('shuzi1')
            if(!isNaN(operation)){
                //单击数字
                if(operator){
                    operator=false;
                    result=String(operation);
                    console.log('result',result)
                    operands2=result;
                    cur=result;
                    expression+=operation;
                }else{
                    if(arr.indexOf(expression[expression.length-1])>-1){
                        console.log(2)
                        result=operation;
                        cur=result;
                        operands1=result;
                        operands2='';
                        operators='';
                        expression+=operation;
                    }else{
                        if(operands1=='0'){
                            result='';
                        }
                        result+=operation;
                        if(operands2){
                            operands2=result;
                        }else{
                            operands1=result;
                        }
                        cur=result;
                        expression+=operation;
                    }
                }
            }else if(operation=='.'){
                //单击小数点
                if(operator){
                    result='0.';
                    operands2=result;
                    cur=result;
                    expression+=operation;
                }else{
                    if(operands2){
                        if(operands2.indexOf('.')==-1){
                            result+=operation;
                            operands2=result;
                            cur=result;
                            expression+=operation;
                        }
                    }else{
                        if(operands1.indexOf('.')==-1){
                            result+=operation;
                            operands1=result;
                            cur=result;
                            expression+=operation;
                        }
                    }
                }
                console.log('小数点',operands1,operands2)
                operator=false;
            }else if(operation=='AC'){
                cur=0;
                result='';
                operands1='';
                operands2='';
                operator=false;
                operators='';
                expression='';
                ac=true;
            }else if(arr1.indexOf(operation)>-1){
                operator=true;
                if(operands2){
                    if(operation=='yRootOfx'){
                        result=Math.log(operands1)/Math.log(operands2);
                        cur=result;
                        expression+=operation;
                    }else{
                        result=eval(operands1+operators+operands2);
                        operands1=result;
                        cur=result;
                    }
                }
                operators=operation;
                expression+=operation;
                console.log('expression',expression);
            }else if(operation=='='){
                console.log('expression3',expression);
                if(operator){
                    console.log('expression',expression);
                    operands2=operands1;
                    operands1=cur;
                    if(operator=='yRootOfx'){
                        result=Math.log(operands1)/Math.log(operands2);

                    }else{
                        result=eval(operands1+operators+operands2);
                    }
                }else{
                    console.log('expression2',expression);
                    if(expression[expression.length-1]=='='){
                        console.log('zhixing')
                        operands1=cur;
                    }
                    if(operators=='yRootOfx'){
                        console.log('expression4',expression);
                        result=Math.log(operands1)/Math.log(operands2);

                    }else{
                        console.log('expression5',expression);
                        result=eval(operands1+operators+operands2);
                    }
                    
                }
                expression+=operation;
                cur=result;
                operator=false;
                console.log('expression6',expression);
            }else if(arr2.indexOf(operation)>-1){
                switch(operation){
                    case arr2[0]: {result=Number(operands1)/100;break;}
                    case arr2[1]: {result=-Number(operands1);break;}
                    case arr2[2]: {result=1/Number(operands1);break;}
                    case arr2[3]: {result=Math.sqrt(operands1);break;}
                    case arr2[4]: {result=Math.cbrt(operands1);break;}
                    case arr2[5]: {result=Math.log(operands1);break;}
                    case arr2[6]: result=Math.log10(operands1);
                }
                cur=result;
                operands1=cur;
                expression+=operation;
                operator=false;
            }
        }
        dispatch({
            type:String(operation),
            data:{ cur }
        })
    }
}