import "./navBar.css";
import { FooterLinks } from "../../assets/base";


export default function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <a href="">
          <h1>
            <span className="custom-m">M</span>N
            <span className="custom-m">M</span>
          </h1>
        </a>
        <ul>
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={FooterLinks.github} target="_blank">Github</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
