import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { user } from "../userDB";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 450px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  &::placeholder {
    font-size: 14px;
  }
  box-sizing: border-box;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  background-color: #03c75a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #fff;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
`;

const Message = styled.span`
  color: crimson;
  font-weight: 600;
  margin-bottom: 15px;
`;

let idMessage;
let pwdMessage;

export const Login = () => {
  // 로그인 했을 경우 홈으로
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
    console.log(getValues());

    //방법 1
    // if(getValues.id !== user.userId){
    //     ddd
    // }

    //방법2 비구조할당
    const { id, password } = getValues();
    const { userId, userPassword } = user;
    if (id !== userId) {
      return (idMessage = "없는 유저입니다");
    }

    if (password !== userPassword) {
      return (pwdMessage = "비밀번호가 틀렸습니다");
    }

    alert("로그인 되었습니다");

    history.push("/home");
  };

  //   => watch: 유저가 작성한 내용을 실시간으로 받아올 수 있음
  //   console.log(watch());

  //   =>Optinal chaining
  //   console.log(errors?.id?.message);
  //   =>(= errors && errors.id && errors.id.message )
  //   console.log(errors?.password?.message);

  //   console.log(isValid);

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <Input
          {...register("id", {
            // required: true
            required: "아이디는 필수 입력값입니다",
            minLength: {
              value: 3,
              message: "3자 이상 작성하세요",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        {errors?.id?.message && <Message>{errors?.id?.message}</Message>}
        {idMessage && <Message>{idMessage}</Message>}

        <Input
          {...register("password", {
            required: "비밀번호는 필수 입력값입니다",
            minLength: {
              value: 8,
              message: "8자 이상 작성하세요",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        {errors?.password?.message && (
          <Message>{errors?.password?.message}</Message>
        )}
        {pwdMessage && <Message>{pwdMessage}</Message>}
        <Button opacity={isValid ? "1" : "0.5"}>로그인</Button>
      </Form>
    </Wrap>
  );
};

// 1. 아이디
// =>아이디 유무 파악 -> 유: 아이디 성공, 무: 아이디가 없습니다
// => 몇자 이상 작성하기 -> 이하: 메세지, 이상: ""

// 2. 패스워드
// => 패스워드 일치 불일치 파악 -> 틀리면: "메세지", 성공: "로그인"
// => 몇자 이상 작성하기 -> 이하: 메세지, 이상:""

// =>react-hook-form

//useform생성 onSubmit으로 클릭이벤트
