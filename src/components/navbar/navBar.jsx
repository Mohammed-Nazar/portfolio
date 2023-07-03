import "./navBar.css";

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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
