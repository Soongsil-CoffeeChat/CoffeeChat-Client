import React, { useEffect, useState } from "react";
import * as S from "./search.styles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import LeftButton from "../../assets/LeftButton.svg";
import RightButton from "../../assets/RightButton.svg";
import axios from "axios";
import axiosInstance from "../../apis/axiosInstance";
import {
  Container,
  Header,
  Subtitle,
  Title,
} from "../../components/global.styles";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import BackButton from "../../components/button/backButton";
import TagDelete from "../../assets/TagDelete.svg";
import { partSearchState, clubSearchState } from "../../atoms/authState";

export default function Search() {
  const navigate = useNavigate();
  const [part, setPart] = useRecoilState(partSearchState);
  const [club, setClub] = useRecoilState(clubSearchState);

  // 페이지가 로드될 때 localStorage에서 part와 club 값을 불러옴
  useEffect(() => {
    setPart("");
    setClub("");
  }, []);

  const handleSearchView = () => {
    if (club === "" && part === "") {
      alert("검색할 파트나 동아리를 선택해주세요.");
    } else {
      navigate("/search/searchview");
    }
  };

  const deletePartTag = () => {
    setPart("");
  };

  const deleteClubTag = () => {
    setClub("");
  };

  return (
    <Container>
      <Header>
        <BackButton />
        <S.SearchContainer>
          <S.TagContainer>
            {part !== "" && (
              <S.Tag>
                <S.TagText>{part}</S.TagText>
                <S.TagDeleteBtn src={TagDelete} alt="TagDelete" onClick={deletePartTag} />
              </S.Tag>
            )}
            {club !== "" && (
              <S.Tag>
                <S.TagText>{club}</S.TagText>
                <S.TagDeleteBtn src={TagDelete} alt="TagDelete" onClick={deleteClubTag} />
              </S.Tag>
            )}
          </S.TagContainer>
          <S.SearchIcon
            src={SearchIcon}
            alt="SearchIcon"
            onClick={handleSearchView}
          />
        </S.SearchContainer>
      </Header>
      <S.BodyContainer>
        <S.ButtonTitle>파트</S.ButtonTitle>
        <S.ButtonContainer>
          {["FE", "BE", "기획", "디자인"].map((option) => (
            <S.OptionButton
              key={option}
              isSelected={part === option}
              onClick={() => setPart(option)}
            >
              {option}
            </S.OptionButton>
          ))}
        </S.ButtonContainer>
        <S.ButtonTitle>동아리</S.ButtonTitle>
        <S.ButtonContainer>
          {["GDSC", "YOURSSU", "UMC", "LIKELION"].map((option) => (
            <S.OptionButton
              key={option}
              isSelected={club === option}
              onClick={() => setClub(option)}
            >
              {option}
            </S.OptionButton>
          ))}
        </S.ButtonContainer>
      </S.BodyContainer>
    </Container>
  );
}
