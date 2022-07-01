import axios from "axios";
import React from "react";
import Post from "../../components/Post";
import { PostProps, Posts } from "../../interfaces/Props";

const index: React.FC<PostProps> = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await (
    await axios.get("http://localhost:1337/api/postsses")
  ).data.data;
  return {
    props: {
      posts,
    },
  };
}

export default index;
