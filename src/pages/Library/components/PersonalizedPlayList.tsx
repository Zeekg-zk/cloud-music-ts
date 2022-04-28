import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPersonalizedNewSongs } from "../../../api/personalized";
import SongItem from "./SongItem";

const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 1.2rem;
    writing-mode: vertical-lr;
    letter-spacing: 2px;
    margin-right: 20px;
    user-select: none;
  }
  .grid_layout {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }
`;

/**
 * 推荐的歌单
 * @returns
 */
const PersonalizedPlayList = () => {
  const [newSongs, setNewSongs] = useState<Array<API.Song>>();

  useEffect(() => {
    (async () => {
      const data = await fetchPersonalizedNewSongs();
      console.log(data);
      const arr: Array<API.Song> = [];
      data.result.forEach((item) => {
        arr.push(item.song);
      });
      setNewSongs(arr);
    })();
  }, []);

  return (
    <StyleDiv>
      <div className="text">推荐新音乐单曲</div>
      <div className="grid_layout">
        {newSongs?.map((item) => (
          <SongItem
            key={item.id}
            name={item.name}
            picUrl={item.album?.picUrl!}
            arName={item.artists![0].name}
          />
        ))}
      </div>
    </StyleDiv>
  );
};

export default PersonalizedPlayList;
