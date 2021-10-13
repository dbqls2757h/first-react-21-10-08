import { Component } from "react";

// export class ClassComponent extends Component {
//   render() {
//     return <div>클래스 함수 컴포넌트!</div>;
//   }
// }

// export default ClassComponent;

//클래스형 props
export class ClassComponent extends Component {
  render() {
    console.log(this.props.nickName);
    // const props = this.props;
    // const nickName = this.props.nickName;
    const nickName = this.props.nickName;
    const age = this.props.age;

    return (
      <>
        <div>클래스 함수 컴포넌트!</div>;
        <h3>
          안녕 내이름은 {nickName} 나이는 {age}살이야!🍳
        </h3>
      </>
    );
  }
}
