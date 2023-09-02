import "./ShowText.css";
import { Fade } from "react-awesome-reveal";

export default function ShowText() {
  const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }, []);

  return (
    <>
      { isVisible && <Fade delay={2000} direction={"bottom"} duration={2000}>
        <div className="headings ">
          <h1>Hello, </h1>
          <h1>Fresher!</h1>
        </div>
      </Fade> }

      <Fade delay={6000} direction={"bottom"} duration={2000}> 
        <div className="headings "> 
          <h1>Welcome to</h1> 
          <h1 style={{color: '#2e3192'}}>NSS GEHU</h1> 
        </div> 
      </Fade>
    </>
  );
}
