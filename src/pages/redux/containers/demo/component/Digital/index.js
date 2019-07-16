import React from 'react'
import * as actions from '../../action'
// import store from '../../../store/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Digital extends React.Component{
    render(){
        const { actions } = this.props; 
        console.log("Digital",this.props);
        //计算器的键码
        let list=[['AC','+/-','%','÷'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,'.','=']]
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
                                        actions.clickDigital( val, ()=>{}, ()=>{} )
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
        console.log('digital state',state)
        return state
    },
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Digital); 