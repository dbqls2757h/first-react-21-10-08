//함수형 컴포넌트 1.
// function FnComponent() {
//   return <div>함수형 컴포넌트!</div>;
// }

// export default FnComponent;

//2.
// const FnComponent = () => {
//   return <div>함수형 컴포넌트~</div>;
// };

// export default FnComponent;

//3. 주로 사용 => export를 앞에 붙이면 import 반드시 {함수명}
// export const FnComponent = () => {
//   return <div>함수형 컴포넌트~</div>;
// };


//함수형 props
export const FnComponent = ({ foodName, dinner }) => {
  console.log(foodName);
  return (
    <div>
      <div>함수형 컴포넌트~</div>
      <h3>오늘의 메뉴는 {foodName}🧇!</h3>
      <h3>저녁메뉴는 {dinner}!</h3>
    </div>
  );
};
