import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;
/**
 * 专为 For You 板块使用的（每日推荐）
 */
export const ForYoudiv = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  .title {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-size: 50px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    z-index: 1;
  }
  /* 显示的图片滚动动画 */
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: ${move} 36s infinite;
    animation-direction: alternate;
  }
`;
