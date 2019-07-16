import React from 'react';
export default class Functional extends React.Component{
    render(){
        let list=[
            ['(',')','mc','m+','m-','mr'],
            [<span>2 <sup>nd</sup> </span>,<span>x <sup>2</sup></span>, <span>x <sup>3</sup></span>,<span>x <sup>y</sup></span>, <span>e <sup>x</sup></span>, <span>10<sup>x</sup></span>],
            ['1/x', <span><sup>2</sup>&radic; <sub>x</sub></span>, <span><sup>3</sup>&radic; <sub>x</sub></span>,<span><sup>y</sup>&radic; <sub>x</sub></span>,'In','log10'],
            ['x!','sin','cos','tan','e','EE'],
            ['Ran','sinh','cosh','tanh','3.14','Rand']
        ]
        return (
            <ul className='functional'>
                {
                    list.map((val,index)=>(
                        <li key={index}>{
                            val.map((val,index)=>(
                                <button key={index}>{val}</button>
                            ))
                        }</li>
                    ))
                }
            </ul>
        )
    }
}