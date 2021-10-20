import styled from "styled-components";
import { contents } from "../api";
import {
  Wrap,
  ConWrap,
  ItemWrap,
  Con,
  Bg,
  Title,
  Desc,
} from "./styles/ContentStyle";
import { DarkMode } from "../GlobalStyled/GlobalStyle";

// console.log(contents);
console.log(DarkMode);

export const StyledConEx = () => {
  const { fontColor, bgColor } = DarkMode;
  // console.log(fontColor, bgColor);
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
