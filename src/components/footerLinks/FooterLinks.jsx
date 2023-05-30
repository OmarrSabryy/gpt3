import React from "react";
import classes from "./footerLinks.module.css";
const FooterLinks = (props) => {
  // console.log(props.listItems);
  const content = props.listItems?.map((item, index) => (
    <li key={item + index}>{item}</li>
  ));
  return (
    <div className={classes["gpt3__footerLinks"]}>
      <h3>{props.title}</h3>
      <ul>{content}</ul>
    </div>
  );
};

export default FooterLinks;
