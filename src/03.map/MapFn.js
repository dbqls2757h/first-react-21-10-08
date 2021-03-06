import { brands } from "./api";

export const MapFn = () => {
  const nums = [0, 1, 2, 3, 4];
  const food = "๋๊น์ค๐ฅฎ";

  //   console.log(nums);


  //=> map: ๊ธฐ์กด๋ฐฐ์ด์ ๋ณ๊ฒฝํ์ง ์๊ณ  ์๋ก์ด ๋ฐฐ์ด๋ก ๋ฐํ(filter๊ณผ ์ ์ฌ)
  //=> ๋ถ๋ณ์ฑ ์ ์ง ์์ผ์ค
  //   const newNum = nums.map((x) => x + "๐");
  //   console.log(newNum); //=> 0๐, ...
  //   console.log(nums); //=>0,1,2,3,4,

  
  //   const newNum = nums.map((num) => num * 2);
  //   console.log(newNum);


  //api.js๋ก exportํด์ import๋ก ๋ฐ์์ด
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
      {/* ์ค๋์ ๋ฉ๋ด๋ <b>{food}</b>
      <br />
      ์ค๋์ ๋ฉ๋ด๋ <h3>{food}</h3> */}

      {nums.map((num) => (
        <div key={num}>{num}๋ฒ์งธ ๊ฒ์๋ฌผ</div>
      ))}

      <h3>๋ธ๋๋</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            ๋ธ๋๋: {brand.name}, ๋ชจ๋ํฐ: {brand.monitor}
          </li>
        ))}
      </ul>
    </div>
  );
};
