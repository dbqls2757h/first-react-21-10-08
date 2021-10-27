import { useState } from "react";

export const ReFnEvent = () => {
  const [num, setNum] = useState(0);
  console.log(num);

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
