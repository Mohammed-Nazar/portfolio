import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileCode} from "@fortawesome/free-regular-svg-icons"
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons"

export default function Services() {
  return (
    <>
      <div className="services">
        <div>
          <h1>My <span>Services</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="services-card">
            <div>
            <FontAwesomeIcon icon={faFileCode} size="xl"/>
            <h2>Dynmic Website</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faFileCode} size="xl"/>
            <h2>Static Website</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faTelegramPlane} size="xl"/>
            <h2>Telegram Bots</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
      </div>
    </>
  );
}
