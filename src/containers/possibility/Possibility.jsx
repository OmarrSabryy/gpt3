import React from "react";
import classes from "./possibility.module.css";
import possibilities from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div
      className={`${classes["gpt3__possibilities"]} section__padding`}
      id="possibilities"
    >
      <div className={classes["gpt3__possibilities-media"]}>
        <img src={possibilities} alt="vr" />
      </div>
      <div className={classes["gpt3__possibilities-heading"]}>
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possibility;
