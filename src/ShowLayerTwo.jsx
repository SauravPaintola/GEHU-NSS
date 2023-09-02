import { Fade } from "react-awesome-reveal";

export default function ShowLayerTwo() {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white'
  }
  return (
    <>
      <Fade delay={5000} direction={"bottom"} duration={2000}>
      <div style={containerStyle}>
      </div>
      </Fade>
    </>
  );
}
