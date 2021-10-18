import { brands } from "./api";

export const MapFn = () => {
  const nums = [0, 1, 2, 3, 4];
  const food = "돈까스🥮";

  //   console.log(nums);


  //=> map: 기존배열을 변경하지 않고 새로운 배열로 반환(filter과 유사)
  //=> 불변성 유지 시켜줌
  //   const newNum = nums.map((x) => x + "🍟");
  //   console.log(newNum); //=> 0🍟, ...
  //   console.log(nums); //=>0,1,2,3,4,

  
  //   const newNum = nums.map((num) => num * 2);
  //   console.log(newNum);


  //api.js로 export해서 import로 받아옴
  //   const brands = [
  //     {
  //       id: 0,
  //       name: "apple",
  //       monitor: "apple monitor",
  //     },
  //     {
  //       id: 1,
  //       name: "samsung",
  //       monitor: "samsung monitor",
  //     },
  //     {
  //       id: 2,
  //       name: "lg",
  //       monitor: "lg monitor",
  //     },
  //     {
  //       id: 3,
  //       name: "asus",
  //       monitor: "asus monitor",
  //     },
  //     {
  //       id: 4,
  //       name: "logitec",
  //       monitor: "logitec monitor",
  //     },
  //   ];

  return (
    <div>
      {/* 오늘의 메뉴는 <b>{food}</b>
      <br />
      오늘의 메뉴는 <h3>{food}</h3> */}

      {nums.map((num) => (
        <div key={num}>{num}번째 게시물</div>
      ))}

      <h3>브랜드</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            브랜드: {brand.name}, 모니터: {brand.monitor}
          </li>
        ))}
      </ul>
    </div>
  );
};
