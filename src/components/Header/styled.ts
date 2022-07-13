import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 144px;
  background-color: #f26522;
  flex-direction: column;
  display: flex;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }

  input {
    width: 660px;
    height: 48px;
    background: #fafafa;
    border-radius: 16px;
    font-family: "Courier New", Courier, monospace;
  }

  li {
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }

  .icones-icones {
    width: 70%;
    justify-content: space-between;
  }
`;
