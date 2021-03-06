import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { user } from "../../userDB";

const SHeader = styled.div`
  width: 100%;
`;

const InHeader = styled.div`
  width: 1200px;
  margin: 10px auto 0 auto;
`;

const UpHeader = styled.header`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const UpHeader_Left = styled.div`
  /* width: 250px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UpHeader_Left_Con = styled.div`
  ::after {
    content: "|";
    padding-right: 5px;
    padding-left: 5px;
    color: #d3d3d3;
  }
  &:nth-child(3)::after {
    display: none;
  }
`;

const UpHeader_Right = styled.div`
  /* width: 250px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UpHeader_Right_Con = styled.div`
  ::after {
    content: "|";
    padding-right: 5px;
    padding-left: 5px;
    color: #d3d3d3;
  }
  &:nth-child(3)::after {
    display: none;
  }
`;

const TopHeader = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: start;
`;

const Logo = styled.div`
  width: 130px;
  height: 56px;
  background: url("https://image.genie.co.kr/imageg/web/common/logo_genie_5.0.png")
    no-repeat 5px 4px;
  margin-right: 70px;
`;

const SearchWrap = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  border-bottom: 3px solid #0096ff;
`;

const SearchBtn = styled.div`
  color: #0096ff;
  font-size: 22px;
`;

const BottomHeader = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #999999;
  display: flex;
  justify-content: space-between;
`;

const MenuWrap = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const LoginWrap = styled.div`
  position: relative;
  z-index: 99;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginOnOff = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const LoginForm = styled.form`
  position: absolute;
  top: 40px;
  left: -100px;
  width: 300px;
  height: 250px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  display: ${(props) => props.see};
`;

const LoginBtn = styled.button`
  all: unset;
  width: 80%;
  height: 50px;
  background-color: #0096ff;
  color: #fff;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
`;

const LoginInput = styled.input`
  all: unset;
  width: 70%;
  height: 25px;
  border: 1px solid #d3d3d3;
  margin-bottom: 15px;
  font-size: 14px;
  ::placeholder {
    padding-left: 3px;
  }
`;

const LoginClose = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  cursor: pointer;
`;

const Message = styled.div`
  color: crimson;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: -5px;
`;

let idMessage;
let pwdMessage;

export const Header = () => {
  const [show, setShow] = useState("none");

  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { id, password } = getValues();
    const { userId, userPassword } = user;

    if (id !== userId) {
      return (idMessage = "?????? ???????????????");
    }

    if (password !== userPassword) {
      return (pwdMessage = "??????????????? ???????????????");
    }

    alert("????????????????????????");

    history.push("/home");
  };

  return (
    <SHeader>
      <InHeader>
        <UpHeader>
          <UpHeader_Left>
            <UpHeader_Left_Con>???????????????</UpHeader_Left_Con>
            <UpHeader_Left_Con>????????? ??????</UpHeader_Left_Con>
            <UpHeader_Left_Con>?????? ??????</UpHeader_Left_Con>
          </UpHeader_Left>
          <UpHeader_Right>
            <UpHeader_Right_Con>???????????????</UpHeader_Right_Con>
            <UpHeader_Right_Con>PC????????????</UpHeader_Right_Con>
            <UpHeader_Right_Con>?????????</UpHeader_Right_Con>
          </UpHeader_Right>
        </UpHeader>

        <TopHeader>
          <Logo></Logo>
          <SearchWrap>
            <SearchInput
              type="text"
              placeholder="???????????? ????????? ???????????? ???????????? ?????????"
            ></SearchInput>
            <SearchBtn>
              <i class="fas fa-search"></i>
            </SearchBtn>
          </SearchWrap>
        </TopHeader>

        <BottomHeader>
          <MenuWrap>
            <Menu>????????????</Menu>
            <Menu>????????????</Menu>
            <Menu>????????????</Menu>
            <Menu>??????TV</Menu>
            <Menu>??????</Menu>
          </MenuWrap>
          <LoginWrap>
            <LoginTitle>
              ?????????/????????????
              <LoginOnOff onClick={() => setShow("block")}>???</LoginOnOff>
            </LoginTitle>
            <LoginForm see={show} onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  justifyContents: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <LoginBtn opacity={isValid ? "1" : "0.5"}>
                  genie ?????????
                </LoginBtn>
                <LoginInput
                  {...register("id", {
                    required: "???????????? ?????? ??????????????????",
                    minLength: {
                      value: 2,
                      message: "???????????? 3??? ?????? ???????????????",
                    },
                  })}
                  type="text"
                  placeholder="?????????"
                />
                {errors?.id?.message && (
                  <Message>{errors?.id?.message}</Message>
                )}
                {idMessage && <Message>{idMessage}</Message>}

                <LoginInput
                  {...register("password", {
                    required: "??????????????? ?????? ??????????????????",
                    minLength: {
                      value: 8,
                      message: "??????????????? 8??? ?????? ???????????????",
                    },
                  })}
                  type="password"
                  placeholder="????????????"
                />
                {errors?.password?.message && (
                  <Message>{errors?.password?.message}</Message>
                )}
                {pwdMessage && <Message>{pwdMessage}</Message>}
                <LoginClose onClick={() => setShow("none")}>??????</LoginClose>
              </div>
            </LoginForm>
          </LoginWrap>
        </BottomHeader>
      </InHeader>
    </SHeader>
  );
};
