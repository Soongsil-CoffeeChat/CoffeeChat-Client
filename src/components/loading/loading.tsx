import IntroAnim from "../../assets/Intro.json";
import Lottie from "lottie-react";
import * as S from './loading.styles'

export default function Loading() {
  return (
    <S.Container>
      <Lottie
        animationData={IntroAnim}
        loop={true}
        autoplay={true}
        style={{ width: "100%" }}
      />
      <S.Text>로딩 중이에요...</S.Text>
    </S.Container>
  );
}
