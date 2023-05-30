import React from "react";
import classes from "./footer.module.css";
import logo from "../../assets/logo.svg";
import { FooterLinks } from "../../components";
const Footer = () => {
  return (
    <div className={`${classes["gpt3__footer"]} section__padding`}>
      <div className={classes["gpt3__footer-cta"]}>
        <h1 className="gradient__text">
          Do you want to step in to the
          <br /> future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className={classes["gpt3__footer-content"]}>
        <div className={classes["gpt3__footer-content_logo"]}>
          <img src={logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK
            <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <FooterLinks
          title="Links"
          listItems={["Overons", "Social Media", "Counters", "Contact"]}
        />
        <FooterLinks
          title="Company"
          listItems={["Terms & Conditions", "Privacy Policy", "Contact"]}
        />
        <FooterLinks
          title="Get in touch"
          listItems={[
            "Crechterwoord K12 182 DK Alknjkcb",
            "085-132567",
            "info@payme.net",
          ]}
        />
      </div>
      <div className={classes["gpt3__footer-copyRight"]}>
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
