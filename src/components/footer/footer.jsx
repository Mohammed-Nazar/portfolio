import "./footer.css";
import { FooterLinks } from "../../assets/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="sc">
          <a href={FooterLinks.instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={FooterLinks.github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={FooterLinks.linkedin} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <h4>
            This website created by{" "}
            <a href={FooterLinks.github} target="_blank">
              Mohammed
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}
