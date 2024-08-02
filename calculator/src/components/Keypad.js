import React from "react";

class Keypad extends React.Component{
    handleOperator=(value) => {
            this.props.onClick(value)
    };

    render(){
        return(
            <div className="keypad">
                <button id='cl'  onClick={()=>this.handleOperator("AC")}>AC</button>
                <button id='cl'  onClick={()=>this.handleOperator("C")}>C</button>
                <button  onClick={()=>this.handleOperator("%")}>%</button>
                <button id='op' onClick={()=>this.handleOperator("/")}>/</button>
                <button  onClick={()=>this.handleOperator(7)}>7</button>
                <button  onClick={()=>this.handleOperator(8)}>8</button>
                <button  onClick={()=>this.handleOperator(9)}>9</button>
                <button id='op' onClick={()=>this.handleOperator("*")}>x</button>
                <button  onClick={()=>this.handleOperator(4)}>4</button>
                <button  onClick={()=>this.handleOperator(5)}>5</button>
                <button  onClick={()=>this.handleOperator(6)}>6</button>
                <button id='op' onClick={()=>this.handleOperator("+")}>+</button>
                <button  onClick={()=>this.handleOperator(1)}>1</button>
                <button  onClick={()=>this.handleOperator(2)}>2</button>
                <button  onClick={()=>this.handleOperator(3)}>3</button>
                <button id='op' onClick={()=>this.handleOperator("-")}>-</button>
                <button  onClick={()=>this.handleOperator(0)}>0</button>
                <button  onClick={()=>this.handleOperator('.')}>.</button>
                <button id='re'  onClick={()=>this.handleOperator("=")}>=</button>
                
            </div>
        );

    }
}export default Keypad