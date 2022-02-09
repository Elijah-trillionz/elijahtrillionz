import MeetMe from "../components/MeetMe.js";
import getPosts from "../scripts/fileSystem";
import PostItem from "../components/PostItem";
import Meta from "../components/Meta";
import { PostItems, StyledHome } from "../components/styles/Home.styled";
import { timestampDate } from "../scripts/date";

const index = ({ posts }) => {
  return (
    <StyledHome>
      <Meta />
      <MeetMe />
      <PostItems>
        <span>Newly Published Articles</span>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </PostItems>
    </StyledHome>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(10).map((post) => {
    post.timestamp = timestampDate(...post.data.publishedOn);
    return post;
  });

  posts.sort((a, b) => b.timestamp - a.timestamp);

  return {
    props: {
      posts,
    },
  };
};
