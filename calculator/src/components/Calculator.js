import React from "react";
import Display from "./Display"
import Keypad from "./Keypad"
class Calculator extends React.Component{
state = {
    displayValue:"",
}
handleOperator = (value) =>{
    if(value === "="){
    this.setState((prevState)=>({
        displayValue:eval(prevState.displayValue).toString(),
        
    }
    ));    
}
    else if(value === "AC"){
        this.setState(()=>({
            displayValue:" "
        }
        ));}
    else if(value === "C"){
        this.setState((prevState)=>({
            displayValue : prevState.displayValue.slice(0,-1)
        }));
    }
    else{
    this.setState((prevState)=>({
        displayValue : prevState.displayValue + value,
    }));
    };
};

render(){
    return(
    <div className="calculator">
        <Display value = {this.state.displayValue}/>
        <Keypad onClick = {this.handleOperator}/>
    </div>);
}
}
export default Calculator;