import { StyledArticleTags } from "./styles/Markdown.styled";
import Link from "next/link";

const ArticleTags = ({ tags }) => {
  return (
    <StyledArticleTags>
      <strong>Tags:</strong>
      {tags.map((tag, index) => (
        <Link href={`/tags/${tag}`} key={index}>
          {tag.substr(0, 1).toUpperCase() + tag.substr(1) + ","}
        </Link>
      ))}
    </StyledArticleTags>
  );
};

export default ArticleTags;
