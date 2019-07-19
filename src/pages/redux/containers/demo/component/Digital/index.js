import React from 'react'
import * as actions from '../../action'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/**
    @author 刘健
    这是一个计算器右边框架
* */
class Digital extends React.Component{
    render(){
        const { actions } = this.props; 
        console.log("Digital",this.props);
        //计算器的键码
        let list=[['AC','+/-','%','/'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,'.','=']]
        return (
            <ul className="digital">
                {
                    list.map((val,index)=>(
                        <li key={index}>{
                            val.map((val,index)=>(
                                <button 
                                    key={index} 
                                    data-val={val} 
                                    onClick={()=>{
                                        actions.clickDigital( val )
                                    }}
                                >
                                    {val}
                                </button>
                            ))
                        }</li>
                    ))
                }
            </ul>
        )
    }
}
export default connect(
    state => {
        return state.Calculator
    },
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Digital); 