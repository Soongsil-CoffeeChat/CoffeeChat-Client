import { useEffect, useState } from "react";
import * as S from "./introduce.styles";
import {
  HalfFixedButton,
  Header,
  Subtitle,
  Title,
} from "../../../components/global.styles";
import BackButton from "../../../components/button/backButton";
import axiosInstance from "../../../apis/axiosInstance";

type IntroduceData = {
  title: string;
  description: string;
  answer1: string;
  answer2: string;
};

export default function Introduce() {
  const [mentorId, setMentorId] = useState<number>(0);
  const [introduceData, setIntroduceData] = useState<IntroduceData | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {
        console.log(response.data.content);
        setMentorId(response.data.content.mentorId);
      })
      .catch((error) => {
        console.error("멘토아이디 조회 실패: ", error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/mentors/${mentorId}`)
      .then((response) => {
        console.log(response.data.content);
        setTitle(response.data.content?.introductionTitle || "");
        setDescription(response.data.content?.introductionDescription || "");
        setAnswer1(response.data.content?.introductionAnswer1 || "");
        setAnswer2(response.data.content?.introductionAnswer2 || "");
      })
      .catch((error) => {
        console.error("자기소개 정보 조회 실패: ", error);
      });
  }, [mentorId]);
  
  // 글자 수를 변경하는 함수
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  const handleAnswer1Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer1(event.target.value);
  };
  const handleAnswer2Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer2(event.target.value);
  };

  const handleEditBtn = () => {
    // if (!introduceData) {
    //   alert("사용자 데이터를 불러오는 중입니다.");
    //   return;
    // }

    // API 요청에 사용할 데이터
    const updatedData = {
      introduction_title: title,
      introduction_description: description,
      introduction_answer1: answer1,
      introduction_answer2: answer2,
    };

    axiosInstance
      .patch(`/mentors/${mentorId}/introductions`, updatedData)
      .then((response) => {
        console.log("사용자 정보 업데이트 성공:", response.data);
        setIsEditing(false);
        alert("정보가 성공적으로 저장되었습니다.");
        setIntroduceData(response.data.content);
      })
      .catch((error) => {
        console.error("사용자 정보 업데이트 실패:", error);
        alert("정보를 저장하는 데 실패했습니다.");
      });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>멘토 소개 관리</Title>
        <Subtitle>코고를 신청할 멘티분들께 멘토님에 대해 소개해주세요</Subtitle>
      </S.BodyContainer>
      <S.TextContainer>
        <S.MemoTitle>한 줄 소개</S.MemoTitle>
        <S.MemoText
          placeholder={isEditing ? "내용을 입력해주세요": "" }
          value={title}
          onChange={handleTitleChange}
          maxLength={30}
          readOnly={!isEditing}
          style={{height: "10rem"}}
        />
        {isEditing && <S.MemoTextLength>{title.length}/30</S.MemoTextLength>}
      </S.TextContainer>
      <S.TextContainer>
        <S.MemoTitle>간단하게 자기소개 부탁드려요</S.MemoTitle>
        <S.MemoText
          placeholder={isEditing ? "내용을 입력해주세요": "" }
          value={description}
          onChange={handleDescriptChange}
          maxLength={200}
          readOnly={!isEditing}
        />
        {isEditing && <S.MemoTextLength>{description.length}/200</S.MemoTextLength>}
      </S.TextContainer>
      <S.TextContainer>
        <S.MemoTitle>멘토링하실 분야에 대해 자세히 알려주세요</S.MemoTitle>
        <S.MemoText
          placeholder={isEditing ? "내용을 입력해주세요": "" }
          value={answer1}
          onChange={handleAnswer1Change}
          maxLength={200}
          readOnly={!isEditing}
        />
        {isEditing && <S.MemoTextLength>{answer1.length}/200</S.MemoTextLength>}
      </S.TextContainer>
      <S.TextContainer style={{marginBottom: "10rem"}}>
        <S.MemoTitle>프로젝트나 근무 경험이 있으시다면 알려주세요</S.MemoTitle>
        <S.MemoText
          placeholder={isEditing ? "내용을 입력해주세요": "" }
          value={answer2}
          onChange={handleAnswer2Change}
          maxLength={200}
          readOnly={!isEditing}
        />
        {isEditing && <S.MemoTextLength>{answer2.length}/200</S.MemoTextLength>}
      </S.TextContainer>
      <HalfFixedButton onClick={isEditing ? handleEditBtn : toggleEditMode}>
        {isEditing ? "저장하기" : "수정하기"}
      </HalfFixedButton>
    </S.Container>
  );
}
