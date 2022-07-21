import React, { Component } from "react";
import Base from "./base";
import { connect } from "react-redux";
import DigitButton from "./calculator/digitButton";
import ACTIONS from "../../redux/actions";
import OperationButton from "./calculator/operationButton";

class Calculator extends Component {
  state = {
    formatter: Intl.NumberFormat("en-us"),
  };
  render() {
    return (
      <Base>
        <div className="calculator">
          <div className="output">
            <div className="last-output">
              {this.state.formatter.format(this.props.lastOperand)}{" "}
              {this.state.formatter.format(this.props.operation)}
            </div>
            <div className="current-output">
              {this.state.formatter.format(this.props.currentOperand)}
            </div>
          </div>
          <button className="button-ac" onClick={this.props.clear}>
            AC
          </button>
          <button onClick={this.props.delete_digit}>Del</button>
          <OperationButton operation={"÷"} />
          <DigitButton digit={"7"} />
          <DigitButton digit={"8"} />
          <DigitButton digit={"9"} />
          <OperationButton operation={"*"} />
          <DigitButton digit={"4"} />
          <DigitButton digit={"5"} />
          <DigitButton digit={"6"} />
          <OperationButton operation={"-"} />
          <DigitButton digit={"1"} />
          <DigitButton digit={"2"} />
          <DigitButton digit={"3"} />
          <OperationButton operation={"+"} />
          <DigitButton digit={"0"} />
          <DigitButton digit={"."} />
          <button className="button-equal" onClick={this.props.evaluate}>
            =
          </button>
        </div>
      </Base>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    currentOperand: state.currentOperand,
    lastOperand: state.lastOperand,
    operation: state.operation,
  };
};

const mapDispatchToProps = {
  delete_digit: () => {
    return {
      type: ACTIONS.DELETE_DIGIT,
    };
  },
  clear: () => {
    return {
      type: ACTIONS.CLEAR,
    };
  },
  evaluate: () => {
    return {
      type: ACTIONS.EVALUATE,
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
