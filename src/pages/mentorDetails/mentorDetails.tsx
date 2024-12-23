import { useEffect, useState } from "react";
import * as S from "./mentorDetails.styles";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import {
  Container,
  FixedButton,
} from "../../components/global.styles";
import BackButton from "../../components/button/backButton";
import ProfileBase from "../../assets/ProfileBase.svg";
import { MentorDetail } from "../../types/mentorDetail";
import Loading from "../../components/loading/loading";

type MentorCategory = {
  기획: "PM";
  디자인: "DESIGN";
  FE: "FE";
  BE: "BE";
};

const mentorCategory: MentorCategory = {
  기획: "PM",
  디자인: "DESIGN",
  FE: "FE",
  BE: "BE",
};

export default function MentorDetails() {
  const { mentorid } = useParams();
  const [mentorData, setMentorData] = useState<MentorDetail | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mentorid) {
      axiosInstance.get(`/mentors/${mentorid}`)
        .then(response => {
          console.log(response.data.content)
          setMentorData(response.data.content);
        })
        .catch(error => {
          console.error("Failed to fetch mentor data:", error);
        });
    }
  }, []);

  const handleApplyBtnClick = () => {
    navigate(`/applycogotime/${mentorid}`);
  };

  const formatTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <Container>
      {mentorData ? (
        <>
        <S.HeaderContainer>
          <BackButton />
          <S.MenotorName>{mentorData.mentorName} 멘토님</S.MenotorName>
        </S.HeaderContainer>
        <S.BodyContainer>
          <S.ProfileContainer>
            <S.ProfileBox>
              {mentorData.imageUrl ? (
                <>
                  <S.ProfileImg src={mentorData.imageUrl.slice(1,-1)} alt="Profile" />
                </>
              ) : (
                <S.ProfileBase src={ProfileBase} alt="Profile" />
              )}
            </S.ProfileBox>
            <S.ProfileTagContainer>
              <S.ProfileTag>{mentorData.part}</S.ProfileTag>
              <S.ProfileTag>{mentorData.club}</S.ProfileTag>
            </S.ProfileTagContainer>
          </S.ProfileContainer>
          <S.IntroduceContainer>
            <S.IntroduceTitle>
              {mentorData.introductionTitle
                ? formatTextWithLineBreaks(mentorData.introductionTitle)
                : `안녕하세요`}
            </S.IntroduceTitle>
            <S.IntroduceAnswer>
              {mentorData.introductionDescription
                ? formatTextWithLineBreaks(mentorData.introductionDescription)
                : `${mentorData.part} 파트 멘토, ${mentorData.mentorName}입니다`}
            </S.IntroduceAnswer>
            <S.IntroduceTitle>이런 분야에서 멘토링이 가능해요</S.IntroduceTitle>
            <S.IntroduceDescript>
              {mentorData.introductionAnswer1
                ? formatTextWithLineBreaks(mentorData.introductionAnswer1)
                : `${mentorData.part} 관련 분야의 멘토링이 가능해요`}
            </S.IntroduceDescript>
            <S.IntroduceTitle>이런 경험들을 해왔어요</S.IntroduceTitle>
            <S.IntroduceDescript>
              {mentorData.introductionAnswer2
                ? formatTextWithLineBreaks(mentorData.introductionAnswer2)
                : `${mentorData.part} 관련 경험이 있어요`}
            </S.IntroduceDescript>
          </S.IntroduceContainer>
          <FixedButton onClick={handleApplyBtnClick}>코고 신청하기</FixedButton>
        </S.BodyContainer>
        </>
      ) : (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      )}
    </Container>
  );
}
