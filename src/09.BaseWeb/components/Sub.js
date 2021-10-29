import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

const CoverBg = styled.div`
  width: 60%;
  height: 500px;
  /* background: url("https://i.pinimg.com/originals/ce/2f/14/ce2f14d882dae4a79c020ea5212b9bec.jpg")
    no-repeat center/cover; */
  background: url(${(props) => props.bgImg}) no-repeat center/cover;
`;

const ConWrap = styled.div`
  width: 45%;
  margin-left: 50px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin: 50px 0;
`;

const Desc = styled.p`
  line-height: 1.5em;
  font-size: 16px;
`;

export const Sub = ({ bg, title, desc }) => {
  console.log(bg);
  return (
    <Wrap>
      <CoverBg bgImg={bg} />
      <ConWrap>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </ConWrap>
    </Wrap>
  );
};
