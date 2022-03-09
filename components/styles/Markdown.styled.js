import { Disclosure, DisclosureButton } from '@reach/disclosure';
import styled from 'styled-components';

export const StyledArticleTags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-style: italic;

  strong {
    font-size: 0.75rem;
    color: rgba(85, 85, 85, 0.68);
  }

  a {
    font-size: 0.75rem;
    font-weight: 500;
    padding-left: 5px;
  }
`;

export const ArticleTitle = styled.h1`
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 13px;
  color: #333;
  font-size: 1.9rem;
`;

export const StyledMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;

  p {
    font-size: 0.75rem;
    color: #555;
  }

  a {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const ArticleParagraph = styled.p`
  color: #222;
  font-size: 1rem;
  line-height: 2;
  margin: 15px 0;
`;

export const ArticleLink = styled.a`
  text-decoration-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    text-decoration-color: transparent;
  }
`;

export const ArticleList = styled.ol`
  margin-left: 0;

  li {
    margin-left: 30px;
    margin-top: 5px;
    color: #222;
    font-size: 1rem;
  }
`;

export const ArticleHeader = styled.h2`
  margin: 25px 0;
  color: #333;
`;

export const ArticleQuote = styled.blockquote`
  padding-left: 20px;
  margin: 30px 0;
  position: relative;

  &::before {
    content: '"';
    font-size: 90px;
    color: #888;
    position: absolute;
    bottom: 100%;
    height: 30px;
    right: 100%;
    font-style: italic;
  }

  &::after {
    content: '"';
    font-size: 90px;
    color: #888;
    position: absolute;
    bottom: 20px;
    height: 30px;
    right: 30px;
    font-style: italic;
  }

  p {
    font-size: 1.2rem;
    color: #888;
    font-style: italic;
  }

  @media (min-width: 768px) {
    left: 30px;
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

export const SyntaxHighlighter = styled.pre`
  max-width: 700px;
  margin: 30px 0;
  background-color: #0e1217;
  padding: 20px 15px;
  border-radius: 5px;
  font-size: 0.8rem;
  line-height: 1.6;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-corner {
    height: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 25px;
  }
`;

export const StyledDisclosure = styled(DisclosureButton)`
  background: #f4f4f4;
`;
