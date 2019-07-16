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
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const { actions } = this.props; 
        console.log('父组件',this.props);
        /* let list=[['(',')','mc','m+','m-','mr','AC','+/-','%','÷',],['2nd','x2','x3','xy','ex','10x',7,8,9,'*'],[]] */
        //计算器的键码
        let list=[['AC','+/-','%','÷'],[7,8,9,'*'],[4,5,6,'-'],[1,2,3,'+'],[0,'.','=']]
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
        console.log('state',state.Demo)
        return state.Demo
    },
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Demo);
