import { server } from "@/config";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ArticleList from "@/components/ArticleList";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    // `https://jsonplaceholder.typicode.com/posts?_limit=6`
    `${server}/api/articles`
  );
  const articles = await res.json();
  return { props: { articles } };
};
