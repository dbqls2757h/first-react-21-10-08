import { Component } from "react";

export class ReClassEvent extends Component {
  state = {
    num: 0,
  };

  render() {
    // const changeNum = this.state.num;
    // console.log(changeNum);

    const { num: changeNum } = this.state;
    console.log(changeNum);

    const onClickPlus = () => {
      this.setState({
        num: changeNum + 1,
      });
    };

    const onClickMinus = () => {
      this.setState({
        num: changeNum - 1,
      });
    };

    return (
      <div>
        <h1>클래스 컴포넌트</h1>
        <h3>{this.state.num}</h3>
        <button onClick={onClickPlus}> + </button>
        <button onClick={onClickMinus}> - </button>
      </div>
    );
  }
}
