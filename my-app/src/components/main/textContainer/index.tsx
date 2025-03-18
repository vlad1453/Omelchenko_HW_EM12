import "./style.css";
import { textComponent } from "../../../type/mainPage";

function TextContainer(props: textComponent) {
  <div></div>;
  if (props.isImportant) {
    return (
      <div className="IN1LINE">
        <p>{props.time}</p>
        <div className="bold">
          <h3>
            <a href={props.link}>{props.title}</a>
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="IN1LINEBG">
        <p>{props.time}</p>
        <div className="bold">
          <a href={props.link}>{props.title}</a>
        </div>
      </div>
    );
  }
}

export default TextContainer;
