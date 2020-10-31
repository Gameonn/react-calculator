import React from 'react';
import classes from './CalculatorView.module.css';

const calculatorView = (props) => {

    return (
        <div className={classes.CalculatorView}>
            <div>
                <button onClick={props.clicked} > 1 </button>
                <button onClick={props.clicked} > 2 </button>
                <button onClick={props.clicked} > 3 </button>
                <button onClick={props.clicked} > + </button>
            </div>
            <div>
                <button onClick={props.clicked}> 4 </button>
                <button onClick={props.clicked}> 5 </button>
                <button onClick={props.clicked}> 6 </button>
                <button onClick={props.clicked}> - </button>
            </div>
            <div>
                <button onClick={props.clicked}> 7 </button>
                <button onClick={props.clicked}> 8 </button>
                <button onClick={props.clicked}> 9 </button>
                <button onClick={props.clicked}> / </button>
            </div>
            <div>
                <button onClick={props.clicked}> . </button>
                <button onClick={props.clicked}> 0 </button>
                <button onClick={props.calculate} disabled={!props.action}> = </button>
                <button onClick={props.clicked}> * </button>
            </div>
        </div>
    );
}

export default calculatorView;