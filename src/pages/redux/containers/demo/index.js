//import Tools from 'utils/index';
import React from 'react';
import { Button } from 'qnui';
import './index.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Digital from './component/Digital';
import Functional from './component/Functional/Functional';
import * as actions from './component/Digital/action';

/**
    @author 刘健
    这是一个演示的calculator组件
* */
class Calculator extends React.Component {
    render() {
        //计算器的键码
        let list=[['AC','+/-','%','÷'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,'.','=']];
        //显示计算机
        return (
            <div className='redux-demo'>
                <div className='textbox'>{this.props.cur}</div>
                <div className="contorl_panel">
                    <Functional></Functional>
                    <Digital></Digital>
                </div>
            </div>
        );
    }
} 
export default connect(
    state => {
        return state.Calculator
    },
    dispatch => {console.log(1); return { actions: bindActionCreators(actions, dispatch) }},
)(Calculator);
