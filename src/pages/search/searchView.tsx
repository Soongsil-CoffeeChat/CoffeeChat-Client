import { useEffect, useState } from "react";
import * as S from "./search.styles";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import {
  Container,
  Header,
} from "../../components/global.styles";
import SearchIcon from "../../assets/Search.svg";
import BackButton from "../../components/button/backButton";
import MentorCard from "../../components/mentorCard/mentorCard";
import { MentorData } from "../../types/mentorData";
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

export default function SearchView() {
  const [mentorData, setMentorData] = useState<MentorData[] | []>([]);
  const [selectedMentorData, setSelectedMentorData] =
    useState<MentorData | null>(null);
  const navigate = useNavigate();
  // const [partState, setPartState] = useRecoilValue(partSearchState);
  // const [clubState, setClubState] = useRecoilValue(clubSearchState);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const part = params.get("part") || "";
  const club = params.get("club") || "";
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // setPartState(part);
    // setClubState(club);

    const fetchMentors = async () => {
      setIsLoading(true);
      try {
        let endpoint = "/mentors"; // 기본 엔드포인트
        const params: Record<string, string> = {};

        if (part && club) {
          endpoint = "/mentors/part/club";
          params.part = part;
          params.club = club;
        } else if (part) {
          endpoint = "/mentors/part";
          params.part = part;
        } else if (club) {
          endpoint = "/mentors/club";
          params.club = club;
        }

        const response = await axiosInstance.get(endpoint, { params });
        setMentorData(response.data.content);
      } catch (error) {
        console.error("Failed to fetch mentor data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentors();
  }, [part, club]);

  const handleProfileSelect = (mentor: MentorData) => {
    setSelectedMentorData(mentor);
    console.log("selectedData: ", selectedMentorData);
    navigate(`/mentor-detail/${mentor.mentorId}`);
  };

  const handleSearchBarClick = () => {
    navigate(`/search`);
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
              </S.Tag>
            )}
            {club !== "" && (
              <S.Tag>
                <S.TagText>{club}</S.TagText>
              </S.Tag>
            )}
          </S.TagContainer>
          <S.SearchIcon src={SearchIcon} alt="SearchIcon" />
        </S.SearchContainer>
      </Header>
      <S.BodyContainer>
        {isLoading ? (
          <S.LoadingContainer>
            <Loading />
          </S.LoadingContainer>
        ) : mentorData.length > 0 ? (
          mentorData.map((mentor) => (
            <MentorCard
              key={mentor.mentorId}
              mentor={mentor}
              onClick={() => handleProfileSelect(mentor)}
            />
          ))
        ) : (
          <p style={{ fontSize: "2rem" }}>검색 결과가 없습니다.</p>
        )}
      </S.BodyContainer>
    </Container>
  );
}
