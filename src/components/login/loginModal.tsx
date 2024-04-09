import React from "react";
import LoginHeart from "../../assets/heart.svg";
import GoogleBtn from "../../assets/GoogleButton.svg";
import * as styles from "./loginModal.styles";

const LoginModal = () => {
  return (
    <styles.ModalBackdrop>
      <styles.ModalContainer>
        <styles.ModalHeader>
          지금 가입하고
          <br />
          <b>대학생 커뮤니티</b>에 참여하세요!
        </styles.ModalHeader>
        <styles.HeartImage src={LoginHeart} alt="heart" />
        <styles.GoogleButton src={GoogleBtn} alt="GoogleButton" />
      </styles.ModalContainer>
    </styles.ModalBackdrop>
  );
};

export default LoginModal;
