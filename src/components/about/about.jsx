import "./about.css";
import myPic from "../../assets/my.jpeg";

export default function About() {
  return (
    <>
      <div id="about" className="about-sec">
        <img src={myPic} alt="" />
        <div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          voluptates ullam? Minima natus earum accusamus nostrum quos.
        </p>
        <ul>
          <li>Name : Mohammed Nazar</li>
          <li>Age : 22</li>
          <li>Job : Student</li>
          <li>Address : Erbil,Iraq</li>
          <li>Email : x3raqe@gmail.com</li>
          <li>Hobbies : gym , coding</li>
        </ul>
        <a href=""><button>Contact me</button></a>
        </div>
      </div>
    </>
  );
}
