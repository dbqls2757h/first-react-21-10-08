import { brands } from "./ReApi";

export const ReMap = () => {
  const nums = [0, 1, 2, 3, 4];
  const food = "돈까스";

  // console.log(nums);

  // const newNum = nums.map((x) => x + "🍕");
  // console.log(newNum);
  // console.log(nums);

  // const newNum = nums.map((num) => num * 2);
  // console.log(newNum);

  // const brands = [
  //   {
  //     id: 0,
  //     name: "apple",
  //     monitor: "apple monitor",
  //   },
  //   {
  //     id: 1,
  //     name: "SAMSUNG",
  //     monitor: "SAMSUNG monitor",
  //   },
  //   {
  //     id: 2,
  //     name: "LG",
  //     monitor: "LG monitor",
  //   },
  //   {
  //     id: 3,
  //     name: "logitec",
  //     monitor: " logitec monitor",
  //   },
  // ];

  return (
    <div>
      {/* 오늘의 메뉴는 <b>{food}</b>
      <br /> */}

      {/* {nums.map((num) => (
        <div key={num}>{num}번째 게시물</div>
      ))} */}

      <h3>브랜드</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            브랜드: <b>{brand.name}</b>, 모니터: <b>{brand.monitor}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
