import Mypic from "../../assets/new.png";
import "./main.css";
import Typewriter from "typewriter-effect";

export default function Main() {
  return (
    <>
      <div className="contentMain">
        <img width="25%" src={Mypic} alt="" />
        <div className="mainText">
        <div className="mainText-t">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello!")
                .pauseFor(3000)
                .deleteAll()
                .typeString("I Am Mohammed 🌝")
                .start();
            }}
          />
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iste
            incidunt asperiores, minima earum necessitatibus architecto maiores
            recusandae, tempora obcaecati a repellat assumenda atque? Nemo iste
            ipsum dolorem eveniet fuga.
          </p>
          <a href="" className="btn-h">Hire me</a>
        </div>
      </div>
    </>
  );
}
