import React from "react";
import classes from "./blog.module.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  const date = new Date();
  const dateFormated = date.toLocaleDateString("en-us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const header = "GPT-3 and Open  AI is the future. Let us exlore how it is?";
  const footer = "Read Full Article";
  console.log(dateFormated);
  return (
    <div className={`${classes["gpt3__blog"]} section__margin`} id="blog">
      <div className={classes["gpt3__blog-header"]}>
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className={classes["gpt3__blog-content"]}>
        <aside className={classes["gpt3__blog-content_aside"]}>
          <Article
            image={blog01}
            date={dateFormated}
            head={header}
            foot={footer}
          />
        </aside>
        <div className={classes["gpt3__blog-content_main"]}>
          <div className={classes["gpt3__blog-content_main-row"]}>
            <Article
              flag={"smallArticle"}
              image={blog02}
              date={dateFormated}
              head={header}
              foot={footer}
            />
            <Article
              flag={"smallArticle"}
              image={blog03}
              date={dateFormated}
              head={header}
              foot={footer}
            />
          </div>
          <div className={classes["gpt3__blog-content_main-row"]}>
            <Article
              flag={"smallArticle"}
              image={blog04}
              date={dateFormated}
              head={header}
              foot={footer}
            />
            <Article
              flag={"smallArticle"}
              image={blog05}
              date={dateFormated}
              head={header}
              foot={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
