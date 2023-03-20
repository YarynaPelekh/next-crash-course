import articleStyles from "@/styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      {/* <p className={articleStyles.card}> */}
      <h3>{article.title} &raa;</h3>
      <p>{article.body}</p>
      {/* </p> */}
    </Link>
  );
};

export default ArticleItem;
