import { allUser, covers } from "./MusicApi";
import {
  Wrap,
  MarginWrap,
  Header,
  Arrow,
  Menu,
  ConWrap,
  Contents,
  Con,
  Title,
  Desc,
  Bar,
  InBar,
  Playing,
  PlayCon1,
  PlayCon2,
  PlayCon3,
  PlayCon4,
  PlayCon5,
  User,
  Profile,
  Avatar,
  UserName,
  Next,
} from "./styles/Musicstyle";
import { Dark } from "../GlobalStyled/GlobalStyle";

export const MusicHw = () => {
  const { bgColor, fontcolor } = Dark;

  return (
    <Wrap bgColor={bgColor}>
      <MarginWrap>
        <Header>
          <Arrow>
            <i class="fas fa-sort-down"></i>
          </Arrow>
          <Menu fontcolor={fontcolor}>
            <i class="fas fa-bars"></i>
          </Menu>
        </Header>
        <ConWrap>
          {covers.map((con) => (
            <Contents key={con.id}>
              <Con
                style={{
                  background: `url(${con.img}) no-repeat center/cover`,
                }}
              ></Con>
              <Title fontcolor={fontcolor}>{con.title}</Title>
              <Desc fontcolor={fontcolor}>{con.singer}</Desc>
              <Bar>
                <InBar></InBar>
              </Bar>
            </Contents>
          ))}
        </ConWrap>
        <Playing fontcolor={fontcolor}>
          <PlayCon1>
            <i class="far fa-random"></i>
          </PlayCon1>
          <PlayCon2>
            <i class="fas fa-backward"></i>
          </PlayCon2>
          <PlayCon3>
            <i class="fas fa-pause"></i>
          </PlayCon3>
          <PlayCon4>
            <i class="fas fa-forward"></i>
          </PlayCon4>
          <PlayCon5>
            <i class="far fa-repeat"></i>
          </PlayCon5>
        </Playing>
        <User>
          {allUser.map((alluser) => (
            <Profile key={alluser.id}>
              <Avatar
                style={{
                  background: `url(${alluser.img}) no-repeat center/cover`,
                }}
              ></Avatar>
              <UserName>{alluser.name}</UserName>
            </Profile>
          ))}
          <Next>
            <i class="far fa-chevron-double-right"></i>
          </Next>
        </User>
      </MarginWrap>
    </Wrap>
  );
};
