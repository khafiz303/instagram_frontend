import Post from "./post";

export default function Posts({ posts, onClickPost }) {
  const renderedPosts = posts.map((post) => (
    <Post key={post.id} item={post} onClickPost={onClickPost} />
  ));

  return <div className="profile-posts">{renderedPosts}</div>;
}
