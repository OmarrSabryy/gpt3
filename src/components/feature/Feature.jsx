import React from "react";
import classes from "./feature.module.css";
const Feature = (props) => {
  return (
    <div className={`${classes[`gpt3__feature-${props.flag}`]}`}>
      <div className={classes[`gpt3__feature-${props.flag}_title`]}>
        <div className={classes.bar} />
        <h3>{props.title}</h3>
      </div>
      <div className={classes[`gpt3__feature-${props.flag}_text`]}>
        {props.text}
      </div>
    </div>
  );
};

export default Feature;
