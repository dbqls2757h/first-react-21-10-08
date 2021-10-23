import styled from "styled-components";
import { contents } from "../api";
import {
  Wrap,
  ConWrap,
  Con,
  Bg,
  ItemWrap,
  Title,
  Desc,
} from "./styles/ReContentStyle";
import { Colors } from "../GlobalStyled/GlobalStyle";

export const ReStyledConEx = () => {
  const { bgColor, fontColor } = Colors;

  return (
    <Wrap bg={bgColor}>
      <ConWrap>
        {contents.map((con) => (
          <Con key={con.id}>
            <Bg
              style={{
                background: `url(${con.bgUrl}) no-repeat center/cover`,
              }}
            ></Bg>
            <ItemWrap color={fontColor}>
              <Title>{con.title}</Title>
              <Desc>{con.desc}</Desc>
            </ItemWrap>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};
