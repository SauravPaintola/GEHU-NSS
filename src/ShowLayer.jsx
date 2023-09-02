import { Fade } from "react-awesome-reveal";

export default function ShowLayer() {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white'
  }
  return (
    <>
      <Fade delay={9000} direction={"bottom"} duration={2000}>
      <div style={containerStyle}>
      </div>
      </Fade>
    </>
  );
}
