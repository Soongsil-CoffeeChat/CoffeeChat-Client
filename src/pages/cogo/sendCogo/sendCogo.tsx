import { useEffect, useState } from "react";
import {
  clubState,
  nameState,
  partState,
  userTypeState,
} from "../../../atoms/authState";
import { useRecoilValue } from "recoil";
import * as S from "../cogo.styles";
import {
  Container,
  HalfFixedButton,
  Header,
  Subtitle,
  Title,
} from "../../../components/global.styles";
import BackButton from "../../../components/button/backButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { CogoData } from "../../../types/cogoData";

type CogoDataList = CogoData[];

export default function SendCogo() {
  const [userRole, setUserRole] = useState<string>("");
  const [cogoDataList, setCogoDataList] = useState<CogoDataList>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {
        console.log(response.data.content.role);
        setUserRole(response.data.content.role);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
    
    axiosInstance
      .get(`/applications/status`,{
        params: "unmatched"
      })
      .then((response) => {
        console.log(response.data.content);
        setCogoDataList(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch role data:", error);
      });
  }, []);

  const handleDetailButton = () => {
    navigate("/cogo/send/detail");
  };

  return (
    <S.Container>
      <Header>
        <BackButton />
      </Header>
      <S.BodyContainer>
        <Title>받은 코고</Title>
        <Subtitle>COGO를 하면서 많은 성장을 기원해요!</Subtitle>
        
      </S.BodyContainer>
      <S.MenuContainer>
        <S.MenuWrapperBox onClick={handleDetailButton}>
          <S.MenuText>나는지은님의 코고신청</S.MenuText>
          <S.DateText>2024/07/24</S.DateText>
        </S.MenuWrapperBox>
        <S.MenuWrapperBox onClick={handleDetailButton}>
          <S.MenuText>나는 지은님의 코고신청</S.MenuText>
          <S.DateText>2024/07/24</S.DateText>
        </S.MenuWrapperBox>
      </S.MenuContainer>
    </S.Container>
  );
}
    