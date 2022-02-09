import getPosts from "../../scripts/fileSystem";
import PostItem from "../../components/PostItem";
import Meta from "../../components/Meta";
import { PostItems, StyledHome } from "../../components/styles/Home.styled";
import { timestampDate } from "../../scripts/date";
import { tags } from "../../scripts/tags";

const Tag = ({ posts, tag }) => {
  return (
    <StyledHome>
      <PostItems blog={true}>
        <Meta
          title={`Newly Published ${
            tag?.substr(0, 1).toUpperCase() + tag?.substr(1)
          } Articles - Elijah Trillionz`}
        />
        <span>{tag?.substr(0, 1).toUpperCase() + tag?.substr(1)} Articles</span>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </PostItems>
    </StyledHome>
  );
};

export default Tag;

export const getStaticPaths = () => {
  const paths = tags.map((tag) => {
    return { params: { tag } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const posts = getPosts(false)
    .map((post) => {
      post.timestamp = timestampDate(...post.data.publishedOn);
      return post;
    })
    .filter((post) => {
      return post.data.tags.includes(params.tag);
    });

  posts.sort((a, b) => b.timestamp - a.timestamp);

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
};
