import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;
  background-color: #f0f9ff;
  padding: 50px 0 20px 0;
  margin-top: 30px;

  div > div {
    margin-bottom: 30px;
  }

  div > div i {
    font-size: 2rem;
  }

  div > div a {
    padding-right: 10px;
    color: #444;
    text-decoration: none;
  }

  div > div a:last-child {
    padding-right: 0;
  }

  ul {
    list-style: none;
    padding-bottom: 5px;
    border-bottom: 2px solid #666;
    margin-bottom: 10px;
  }

  li {
    display: inline-block;
    padding: 0 10px;
    margin: 0 2px;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.85rem;
  }

  p {
    margin-bottom: 10px;
  }
`;
