import React from "react";
import classes from "./cta.module.css";
const CTA = () => {
  return (
    <div className={`${classes["gpt3__cta"]} section__margin`}>
      <div className={classes["gpt3__cta-heading"]}>
        <p>Request Early Access to Get Started</p>
        <h2>Register today & start exploring the endless possiblities.</h2>
      </div>
      <button className={classes["gpt3__cta-actions"]} type="button">
        Get Started
      </button>
    </div>
  );
};

export default CTA;
