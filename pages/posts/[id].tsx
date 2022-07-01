import axios from "axios";
import React from "react";
import { PostProps } from "../../interfaces/Props";
import styles from "../../styles/postPage.module.sass";
const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post?.attributes.title}</h1>
      <h2 className={styles.description}>{post?.attributes.description}</h2>
      <p className={styles.content}>{post?.attributes.content}</p>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const post = (await axios.get(`http://localhost:1337/api/postsses/${id}`))
    .data.data;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const post = (await axios.get(`http://localhost:1337/api/postsses/`)).data
    .data;

  const paths = post.map((p: any) => ({
    params: { id: String(p.id) },
  }));
  return {
    paths,
    fallback: true,
  };
}

export default PostPage;
