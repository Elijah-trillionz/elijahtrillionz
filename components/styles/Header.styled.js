import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 27px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondaryBlack};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  box-shadow: 1px 2px 3px hsla(199, 81%, 28%, 0.27);

  h1 {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.4rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    text-align: right;
  }

  li {
    list-style: none;
    display: inline-block;
    margin-right: 15px;
  }
`;
