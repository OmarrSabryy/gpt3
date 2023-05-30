import React from "react";
import classes from "./whatGPT3.module.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className={`${classes["gpt3__whatgpt3"]}  section__margin `} id="wgpt">
      <div className={classes["gpt3__whatgpt3-feature"]}>
        <Feature
          flag={1}
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className={classes["gpt3__whatgpt3-heading"]}>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className={classes["gpt3__whatgpt3-container"]}>
        <Feature
          flag={2}
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          flag={2}
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          flag={2}
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
