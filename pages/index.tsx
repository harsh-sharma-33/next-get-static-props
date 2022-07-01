import type { NextPage } from "next";
import axios, { AxiosResponse } from "axios";
import { PostProps } from "../interfaces/Props";
import HomeScreenPosts from "../components/HomeScreenPosts";

const Home: NextPage<PostProps> = (props) => {
  return <HomeScreenPosts posts={props.posts} />;
};

export default Home;

export async function getStaticProps() {
  const posts: AxiosResponse = await (
    await axios.get("http://localhost:1337/api/postsses")
  ).data.data;
  return {
    props: {
      posts,
    },
  };
}
