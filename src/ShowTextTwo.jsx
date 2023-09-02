import "./ShowText.css";
import { Fade } from "react-awesome-reveal";

export default function ShowTextTwo() {
  return (
    <>
      <Fade delay={7000} direction={"bottom"} duration={2000}>
      <div style={{zIndex: '10'}} className="headings ">
        <h1>Welcome to</h1>
        <h1 style={{color: '#2e3192'}}>NSS GEHU</h1>
      </div>
      </Fade>
    </>
  );
}
