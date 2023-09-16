import classes from "./Footer.module.css";
import facebookIcon from "../../assets/facebookicon.svg";
import instagramIcon from "../../assets/instagramicon.svg";
import iconTwitter from "../../assets/twitterIcon.svg";
import iconVideo from "../../assets/icons8-youtube-48.png";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.iconBox}>
        <li>
          <img height="24px" width="24px" src={facebookIcon} />
        </li>
        <li>
          <img height="24px" width="24px" src={instagramIcon} />
        </li>
        <li>
          <img height="24px" width="24px" src={iconTwitter} />
        </li>
        <li>
          <img height="24px" width="24px" src={iconVideo} />
        </li>
      </ul>

      <ul className={classes.conditionBox}>
        <li>Conditions of Use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
      <p className={classes.copyRightBox}>c 2021 MobieBox by Tiwatayo</p>
    </footer>
  );
};

export default Footer;
