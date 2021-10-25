import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(0);
  console.log(num);

  //   const onClickMinus = () => {
  //     setNum(num - 1);
  //   };

  const onClickPlus = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <h3>{num}</h3>
      <button onClick={onClickPlus}> + </button>
      <button onClick={() => setNum(num - 1)}> - </button>
    </div>
  );
};
