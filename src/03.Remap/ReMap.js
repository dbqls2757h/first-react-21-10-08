import { brands } from "./ReApi";

export const ReMap = () => {
  const nums = [0, 1, 2, 3, 4];
  const food = "λκΉμ€";

  // console.log(nums);

  // const newNum = nums.map((x) => x + "π");
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
      {/* μ€λμ λ©λ΄λ <b>{food}</b>
      <br /> */}

      {/* {nums.map((num) => (
        <div key={num}>{num}λ²μ§Έ κ²μλ¬Ό</div>
      ))} */}

      <h3>λΈλλ</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            λΈλλ: <b>{brand.name}</b>, λͺ¨λν°: <b>{brand.monitor}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
