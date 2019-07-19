import React from 'react';
import * as actions from '../../action'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
/**
    @author 刘健
    这是一个计算器左边框架
* */
class Functional extends React.Component{
    render(){
        let list=[
            {rightparentheses:'(',leftparentheses:')',clearStorage:'mc',addStorage:'m+',cutStoraage:'m-',showStorage:'mr'},
            {secondFunction:<span>2 <sup>nd</sup> </span>,square:<span>x<sup>2</sup></span>, cubic:<span>x <sup>3</sup></span>,yPower:<span>x<sup>y</sup></span>, xPowerOfe:<span>e <sup>x</sup></span>, xPowerOfTen:<span>10<sup>x</sup></span>},
            {reciprocal:'1/x', squareRoot:<span><sup>2</sup>&radic;<sub>x</sub></span>,cubeRoot:<span><sup>3</sup>&radic;<sub>x</sub></span>,yRootOfx:<span><sup>y</sup>&radic;<sub>x</sub></span>,naturalLogarithm:'In',logarithmBasedOnTen:'log10'},
            {functional19:'x!',functional20:'sin',functional21:'cos',functional22:'tan',functional23:'e',functional24:'EE'},
            {functional25:'Ran',functional26:'sinh',functional27:'cosh',functional28:'tanh',functional29:'3.14',functional30:'Rand'}
        ]
        
        const { actions } = this.props; 
        return (
            <ul className='functional'>
                {
                    list.map((val,index)=>(
                        <li key={index}>{
                            Object.keys(val).map((val1,index)=>(
                                <button key={index} onClick={()=>{actions.clickDigital(val1)}}>
                                    {val[val1]}
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
)(Functional); 