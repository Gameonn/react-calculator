import React, { Component } from 'react';
import CalculatorView from '../../components/CalculatorView/CalculatorView';
import Result from '../../components/Result/Result';

class Calculator extends Component {

    state = {
        equation: "",
        result: '',
        action: false
    }

    setEquation = (event) => {
        const str = event.target.outerText;
        let newEquation = this.state.equation;
        const strOperator = this.checkOperator(str);
        let error = false;

        if(strOperator && !newEquation.length) {
            error = true;
            this.setState({result: 'error'});
        }
        if(strOperator)
            this.setState({action: false});
        else
            this.setState({action: true});


        if(!error) {
            const lastChar = newEquation.slice(-1);
            let lastCharOperator = this.checkOperator(lastChar);

            //if last entered key and new key both are operators
            if(lastCharOperator && strOperator) {
                newEquation = newEquation.slice(0, -1) + str;
            }
            else {
                newEquation = newEquation + str;
            }

            this.setState({equation: newEquation, error: false});
            console.log(newEquation, 'eq');
            console.log(this.state, 'state');
        }
    }

    updateCalculateState = () => {
        return this.state.action;
    }

    calculateResult = (event) => {
        if(!this.state.action)
            this.setState({result: 'error'});
        else {
            let equation = this.state.equation;
            const result = eval(equation);
            this.setState({result: result});
        }
    }

    checkOperator = (str) => {
        const operators = ['+', '-', '*', '/'];
        if(operators.includes(str))
            return true;
        else
            return false;
    }


    render() {

        return (
            <div>
                <CalculatorView calculate={(e) => this.calculateResult(e)}
                    action={this.updateCalculateState} clicked={(e) => this.setEquation(e)} />
                <Result result={this.state.result} />
            </div>
        );

    }

}

export default Calculator;