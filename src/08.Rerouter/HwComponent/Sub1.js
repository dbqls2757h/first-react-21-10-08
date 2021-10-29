import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
`;

const ConWrap = styled.div`
  width: 700px;
  height: 500px;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 400px;
  background: url("https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201712/21/d1a9665f-e292-4444-85ce-05fed763c516.jpg")
    no-repeat center/cover;
`;

const TxtWrap = styled.div`
  width: 250px;
`;

export const Sub1 = () => {
  return (
    <Wrap>
      <Helmet>
        <title>서브1</title>
      </Helmet>

      <ConWrap>
        <Img></Img>
        <TxtWrap>
          <h1
            style={{
              fontSize: "30px",
            }}
          >
            Lorem ipsum dolor
          </h1>
          <span
            style={{ display: "block", fontWeight: "300", marginTop: "30px" }}
          >
            sit amet consectetur, adipisicing elit. Similique molestias totam
            omnis? Nisi, numquam nemo. Laboriosam voluptatum, hic vero dolor
            aspernatur quod pariatur sunt similique fugit natus, ipsa voluptas
            beatae.
          </span>
        </TxtWrap>
      </ConWrap>
    </Wrap>
  );
};
