import styled from "styled-components";
import { RecommendSongs } from "../../06.MusicApp/MusicApi";

const SRecommend = styled.div`
  width: 100%;
  margin-top: 30px;
  /* background-color: thistle; */
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid rgba(220, 20, 60, 0.3);
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  opacity: 0.8;
  color: #292929;
`;

const ConWrap = styled.div`
  width: 1000px;
  background-color: thistle;
  margin-top: 10px;
  margin-left: 7px;
`;

const Con = styled.div`
  width: 320px;
  height: 380px;
  float: left;
  margin-right: 13px;
`;

const CoverImg = styled.div`
  width: 320px;
  height: 320px;
  margin-bottom: 8px;
`;

const SongName = styled.div`
  font-weight: 700;
  opacity: 0.8;
`;

const SingerName = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-top: 3px;
`;

export const Recommends = () => {
  return (
    <SRecommend>
      <Title>추천</Title>
      <ConWrap>
        {RecommendSongs.map((song) => (
          <Con key={song.id}>
            <CoverImg
              style={{
                background: `url(${song.Img}) no-repeat center/cover`,
              }}
            ></CoverImg>
            <SongName>{song.songName}</SongName>
            <SingerName>{song.singerName}</SingerName>
          </Con>
        ))}
      </ConWrap>
    </SRecommend>
  );
};
