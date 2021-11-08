import styled from "styled-components";

const SFooter = styled.div`
  width: 100%;
  float: left;
  margin-top: 80px;
`;

const FooterWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
`;

const TopFooter = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopFooter_Left = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  font-weight: 600;
  margin-right: 20px;
`;

const Info_Title = styled.div``;

const TopFooter_Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopFooter_RightCon = styled.div`
  margin-right: 15px;
`;

const BottomFooter = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const BottomFooter_Top = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.div`
  ::after {
    content: "|";
    padding-left: 15px;
    color: #d3d3d3;
  }
  &:nth-child(8)::after {
    display: none;
  }
`;

const SnsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SnsCon = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  &:nth-child(3) {
    margin-right: 0;
  }
`;

const BottomFooter_Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Footer_Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #595959;
  margin-right: 30px;
`;

const CopyRight = styled.div`
  opacity: 0.6;
  line-height: 22px;
  font-size: 13px;
`;

export const Footer = () => {
  return (
    <SFooter>
      <FooterWrap>
        <TopFooter>
          <TopFooter_Left>
            <Info>공지사항</Info>
            <Info_Title>조유리 [GLASSY] 발매 매거진 이벤트</Info_Title>
          </TopFooter_Left>

          <TopFooter_Right>
            <TopFooter_RightCon>이벤트</TopFooter_RightCon>
            <TopFooter_RightCon>고객센터</TopFooter_RightCon>
            <TopFooter_RightCon>이용안내</TopFooter_RightCon>
            <TopFooter_RightCon>서비스 전체보기</TopFooter_RightCon>
          </TopFooter_Right>
        </TopFooter>

        <BottomFooter>
          <BottomFooter_Top>
            <MenuWrap>
              <Menu>회사소개</Menu>
              <Menu>이용약관</Menu>
              <Menu>개인정보처리방침</Menu>
              <Menu>청소년보호정책</Menu>
              <Menu>위치기반 서비스 이용약관</Menu>
              <Menu>이메일주소무단수집거부</Menu>
              <Menu>서비스 이용문의</Menu>
              <Menu>제휴 문의</Menu>
            </MenuWrap>
            <SnsWrap>
              <SnsCon
                style={{
                  background: `url(https://key0.cc/images/small/25277_2f976ed89982b9afd717a91832e6ea98.png) no-repeat center/cover`,
                }}
              ></SnsCon>
              <SnsCon
                style={{
                  background: `url(https://i.pinimg.com/originals/23/82/d4/2382d4ceebd2e054197f53ae7f2e1fd7.png) no-repeat center/cover`,
                }}
              ></SnsCon>
              <SnsCon
                style={{
                  background: `url(https://t1.daumcdn.net/cfile/tistory/994EAB4F5D2565432F) no-repeat center/cover`,
                }}
              ></SnsCon>
            </SnsWrap>
          </BottomFooter_Top>

          <BottomFooter_Mid>
            <Footer_Logo>(주)지니뮤직</Footer_Logo>
            <CopyRight>
              (주)지니뮤직 대표이사 조훈 서울 강남구 테헤란로415
              (L7HOTELS강남타워 6,7,8층) 사업자등록번호 314-81-03453
              통신판매일신고 2013-서울강남-01302
              <br />
              개인정보보호책임자 홍세희 본부장 문의전화 1577-5337 사업자정보확인
              호스팅제공자: (주)지니뮤직
              <br />
              COPYRIGHTⓒGENIE MUSIC CORP ALL RIGHTS RESERVED.
            </CopyRight>
          </BottomFooter_Mid>

          {/* <BottomFooter_Bottom></BottomFooter_Bottom> */}
        </BottomFooter>
      </FooterWrap>
    </SFooter>
  );
};
