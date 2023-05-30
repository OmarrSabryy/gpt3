import React from "react";
import classes from "./article.module.css";
const Article = (props) => {
  const small = props.flag === "smallArticle" ? classes["small"] : "";
  return (
    <div className={classes["gpt3__article"]}>
      <div className={classes["gpt3__article-image"]}>
        <img src={props.image} alt={`${props.image}`} />
      </div>
      <div className={classes["gpt3__article-heading"]}>
        <div className={classes["gpt3__article-heading_header"]}>
          <p>{props.date}</p>
          <h2 className={small}>{props.head}</h2>
        </div>
        <div className={classes["gpt3__article-heading_footer"]}>
          <p>{props.foot}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
