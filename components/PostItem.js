import Link from "next/link";
import { StyledPostItem } from "./styles/Home.styled";
import { formatDate } from "../scripts/date";

const PostItem = ({ post }) => {
  return (
    <StyledPostItem>
      <span>{formatDate(...post.data.publishedOn)}</span>
      <h3>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      <p>{post.data.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>Read more</Link>
    </StyledPostItem>
  );
};

export default PostItem;
