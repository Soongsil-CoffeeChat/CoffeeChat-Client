import { useEffect } from "react";
import * as S from "./search.styles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  Container,
  Header,
} from "../../components/global.styles";
import SearchIcon from "../../assets/Search.svg";
import BackButton from "../../components/button/backButton";
import TagDelete from "../../assets/TagDelete.svg";
import { partSearchState, clubSearchState } from "../../atoms/authState";

export default function Search() {
  const navigate = useNavigate();
  const [part, setPart] = useRecoilState(partSearchState);
  const [club, setClub] = useRecoilState(clubSearchState);

  useEffect(() => {
    setPart("");
    setClub("");
  }, []);

  const handleSearchView = () => {
    if (club === "" && part === "") {
      alert("검색할 파트나 동아리를 선택해주세요.");
    } else {
      const params = new URLSearchParams();
      if (part !== "") {
        params.append("part", part);
      }
      if (club !== "") {
        params.append("club", club);
      }
      navigate(`/search/searchview?${params.toString()}`);
    }
  };

  const deletePartTag = () => {
    setPart("");
  };

  const deleteClubTag = () => {
    setClub("");
  };

  const togglePart = (option: string) => {
    setPart(part === option ? "" : option);
  };

  const toggleClub = (option: string) => {
    setClub(club === option ? "" : option);
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
      <S.BodyContainer style={{padding: "0", gap: "0", margin: "0"}}>
        <S.ButtonTitle>파트</S.ButtonTitle>
        <S.ButtonContainer>
          {["FE", "BE", "PM", "DESIGN"].map((option) => (
            <S.OptionButton
              key={option}
              isSelected={part === option}
              onClick={() => togglePart(option)}
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
              onClick={() => toggleClub(option)}
            >
              {option}
            </S.OptionButton>
          ))}
        </S.ButtonContainer>
      </S.BodyContainer>
    </Container>
  );
}
