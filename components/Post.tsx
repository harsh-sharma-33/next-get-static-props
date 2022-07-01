import Link from "next/link";
import React from "react";
import { PostProps, Posts } from "../interfaces/Props";
import styles from "./Post.module.sass";
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post?.id}`}>
      <div className={styles.container}>
        <h3>{post && post.attributes.title}</h3>
        <p>{post?.attributes.description}</p>
      </div>
    </Link>
  );
};

export default Post;
