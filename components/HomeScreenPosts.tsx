import React, { useEffect, useState } from "react";
import { PostProps, Posts } from "../interfaces/Props";
import styles from "./HomeScreenPosts.module.sass";
import Post from "./Post";
const HomeScreenPosts: React.FC<PostProps> = ({ posts }) => {
  const [postsToShow, setPostsToShow] = useState<Posts[] | undefined>([]);
  useEffect(() => {
    console.log(posts);
    let posts5: Posts[] | undefined;
    if (posts && posts.length > 5) {
      posts5 = posts.slice(0, 5);
    } else {
      posts5 = posts;
    }
    setPostsToShow(posts5);
  }, [posts]);
  return (
    <div>
      <h1>Test</h1>
      {postsToShow &&
        postsToShow.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default HomeScreenPosts;
