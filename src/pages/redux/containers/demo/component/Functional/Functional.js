import React from 'react';
import * as actions from '../../action'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
class Functional extends React.Component{
    render(){
        /* let list=[
            ['(',')','mc','m+','m-','mr'],
            [<span>2 <sup>nd</sup> </span>,<span>x <sup>2</sup></span>, <span>x <sup>3</sup></span>,<span>x <sup>y</sup></span>, <span>e <sup>x</sup></span>, <span>10<sup>x</sup></span>],
            ['1/x', '2? x','3? x','y? x','In','log10'],
            ['x!','sin','cos','tan','e','EE'],
            ['Ran','sinh','cosh','tanh','3.14','Rand']
        ] */
        let list=[
            {functional1:'(',functional2:')',functional3:'mc',functional4:'m+',functional5:'m-',functional6:'mr'},
            {functional7:<span>2 <sup>nd</sup> </span>,functional8:<span>x<sup>2</sup></span>, functional9:<span>x <sup>3</sup></span>,functional10:<span>x <sup>y</sup></span>, functional11:<span>e <sup>x</sup></span>, functional12:<span>10<sup>x</sup></span>},
            {functional13:'1/x', functional14:<span><sup>2</sup>&radic;<sub>x</sub></span>,functional15:<span><sup>3</sup>&radic;<sub>x</sub></span>,functional16:<span><sup>y</sup>&radic;<sub>x</sub></span>,functional17:'In',functional18:'log10'},
            {functional19:'x!',functional20:'sin',functional21:'cos',functional22:'tan',functional23:'e',functional24:'EE'},
            {functional25:'Ran',functional26:'sinh',functional27:'cosh',functional28:'tanh',functional29:'3.14',functional30:'Rand'}
        ]
        
        const { actions } = this.props; 
        return (
            <ul className='functional'>
                {
                    list.map((val,index)=>(
                        <li key={index}>{
                            /* val.map((val,index)=>(
                                <button 
                                    key={index}
                                    onClick={
                                        ()=>{
                                            actions.clickDigital( val );
                                        }
                                    }
                                >
                                    {val}
                                </button>
                            )) */
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
        return state.Demo
    },
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Functional); 