import { useFetch } from "./hooks/useFetch";

const Posts = () => {
  const [posts] = useFetch([], "https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
  return <div>Posts</div>;
};

export default Posts;
