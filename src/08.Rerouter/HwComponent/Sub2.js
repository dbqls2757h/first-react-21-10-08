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
  background: url("http://www.slist.kr/news/photo/202003/144237_256294_1245.jpg")
    no-repeat center/cover;
`;

const TxtWrap = styled.div`
  width: 250px;
`;

export const Sub2 = () => {
  return (
    <div>
      <Helmet>
        <title>서브1</title>
      </Helmet>

      <Wrap>
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
    </div>
  );
};
