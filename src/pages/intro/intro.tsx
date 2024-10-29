import IntroAnim from "../../assets/Intro.json";
import IntroAnim1 from "../../assets/Intro-1.json";
import { Container } from "../../components/global.styles";
import Lottie from "lottie-react";

export default function Intro() {
  return (
    <Container style={{justifyContent: "center"}}>
      <Lottie
        animationData={IntroAnim}
        loop={true}
        autoplay={true}
        style={{ width: "60%", marginBottom: "10rem"}}
      />
    </Container>
  );
}
