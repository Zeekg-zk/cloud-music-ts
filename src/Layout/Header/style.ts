import styled from "styled-components";

export const StyleHeader = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 10vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgb(34, 34, 34);
  img {
    height: 40px;
    clip-path: circle(50%);
    cursor: pointer;
  }
`;

/**
 * 自定义 Nav
 */
export const StyleNav = styled("div")`
  color: white;
`;

/**
 * 自定义 NavLink
 */
export const StyleNavLink = styled("a")`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.08);
  }
  &.active {
    color: var(--main-fontColor);
  }
`;
