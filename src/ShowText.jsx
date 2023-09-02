import "./ShowText.css";
import { Fade } from "react-awesome-reveal";

export default function ShowText() {
  return (
    <>
      <Fade delay={2000} direction={"bottom"} duration={2000}>
      <div className="headings ">
        <h1>Hello, </h1>
        <h1>Fresher!</h1>
      </div>
      </Fade>
    </>
  );
}
