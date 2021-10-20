import styled, { createGlobalStyle } from "styled-components";
import { fontColor } from "../GlobalStyled/ReGlobalStyle";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Con = styled.div`
  width: 350px;
  border: 3px solid black;
`;

const BgImg = styled.div`
  width: 100%;
  height: 350px;
  //이미지 주소 ""로 문자처리
  background: url("https://cdn.shopify.com/s/files/1/0004/8073/9381/products/BRILLAY_20NYLON_20RECYCLED-Bum_20Bag-H1755-129_20Flame_20Red-2_600x.jpg?v=1634510123")
    no-repeat center / cover;
`;

const Items = styled.div`
  padding: 20px;

  color: ${(props) => props.mainColor};

  h3 {
    font-size: 26px;
    margin-bottom: 20px;
  }
  p {
    margin-top: 20px;
    opacity: 0.7;
  }
`;

const Sub = styled.h4`
  margin-top: 20px;
  color: ${(props) => props.subColor};
`;

//=>객체 비구조 할당
const man = {
  name: "유빈",
  age: 22,
  gender: "girl",
};

export const ReStyledCom = () => {
  //객체 비구조할당
  //   const nickName = man.name;
  //   const manAge = man.age;

  //   console.log(nickName, manAge);

  const { name, age, gender } = man;

  console.log(age);

  const { mainColor, subColor } = fontColor;

  return (
    <Wrap>
      <Con>
        <BgImg></BgImg>

        <Items mainColor={mainColor}>
          <h3>Title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fuga
            odit alias iusto perferendis harum excepturi aut dignissimos odio
            fugit aperiam nihil, incidunt blanditiis, ab nostrum? Quam, modi
            illo. Mollitia.
          </p>
          <Sub subColor={subColor}>
            본 카드는 타인에게 양도 또는 대여할 수 없습니다.
          </Sub>
        </Items>
      </Con>
    </Wrap>
  );
};
