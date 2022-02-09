import styled from "styled-components";

export const StyledHome = styled.div`
  p {
    margin-bottom: 10px;
  }

  a:not(h3 > a) {
    font-size: 0.9rem;
  }
`;

export const PostItems = styled.div`
  margin-top: ${({ blog }) => (blog ? "10px" : "45px")};

  span {
    display: block;
    color: #3b3b3b;
    font-size: 1rem;
    font-weight: 500;
    border-bottom: 2px solid #999;
  }
`;

export const StyledPostItem = styled.div`
  margin-bottom: 50px;
  margin-top: 40px;

  h3 {
    color: ${({ theme }) => theme.colors.secondaryBlack};
    padding: 3px 0 10px 0;
  }

  span {
    display: block;
    font-size: 0.75rem;
    font-style: italic;
    border-bottom: none;
  }
`;

export const StyledAbout = styled.div`
  img {
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.primaryWhite} !important;
  }

  p {
    margin-top: 15px;
  }
`;
