import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background: #fff;
    margin: 0;
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.7;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline transparent;
    transition: 0.25s ease-in-out;
  }

  a:hover:not(h1 > a) {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration-color: ${({ theme }) => theme.colors.secondary};
  }

  .disclosure {
    background: #f4f4f4;
    padding: 5px 15px;
    border-radius: 3px;
  }

  .disclosure-btn {
    cursor: pointer;
  }
`;

export default GlobalStyles;

export const MaxWidthWrapper = styled.div`
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const MainMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding: 50px 30px;
  margin-top: 70px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;
