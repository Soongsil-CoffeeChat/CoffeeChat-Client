import { useEffect, useRef, useState } from "react";
import * as S from "./mypage.styles";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/global.styles";
import Arrow from "../../assets/ArrowRight.svg";
import ProfileBase from "../../assets/ProfileBase.svg";
import Camera from "../../assets/Camera.svg";
import { UserData } from "../../types/userData";
import axiosInstance from "../../apis/axiosInstance";

export default function MyPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {
        console.log(response.data.content);
        setUserData(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  const getUserData = async (phoneNumber: string) => {
    if (phoneNumber.length < 10) return;
    console.log(phoneNumber);

    try {
      const response = await axiosInstance.get("/users");
      console.log(response.data.content);
      setUserData(response.data.content);
    } catch (error) {
      console.error("전화번호 인증 실패: ", error);
      alert("전화번호를 다시 입력해주세요.");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const handleWithdrawal = async () => {
    try {
      const response = await axiosInstance.delete("/users");
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("회원 탈퇴가 완료되었습니다.");
      navigate("/login");
    }
  };

  const handleMyProfileButton = () => {
    navigate("/mypage/myprofile");
  };

  const handleIntroduceButton = () => {
    navigate("/mypage/introduce");
  };

  const handleTimeSelectButton = () => {
    navigate("/mypage/timeselect");
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("이미지 형식만 업로드할 수 있습니다. (jpeg, jpg, png)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("파일 크기가 너무 큽니다. 5MB 이하의 이미지를 선택해주세요.");
      return;
    }

    setIsUploading(true);
    setUploadError("");

    try {
      const directory = "v2";
      const formData = new FormData();
      formData.append("image", file);

      const s3Response = await axiosInstance.post(
        `/s3/${directory}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("S3 Response:", s3Response.data);

      if (s3Response.status === 201) {
        let imageUrl: string | undefined;

        if (s3Response.data.content.savedUrl) {
          imageUrl = s3Response.data.content.savedUrl;
        } else {
          throw new Error("이미지 URL을 받아오지 못했습니다.");
        }

        const pictureResponse = await axiosInstance.put(
          "/users/picture",
          imageUrl
        );

        if (pictureResponse) {
          console.log(
            "프로필 이미지 업데이트 성공:",
            pictureResponse.data.content.picture.slice(1, -1)
          );
          const imageUrl = pictureResponse.data.content.picture;
          setUserData((prevData) =>
            prevData ? { ...prevData, picture: imageUrl } : prevData
          );
          alert("프로필 이미지가 성공적으로 업로드되었습니다.");
        } else {
          throw new Error("프로필 이미지 업데이트에 실패했습니다.");
        }
      } else {
        throw new Error("S3 업로드에 실패했습니다.");
      }
    } catch (error: any) {
      console.error("이미지 업로드 실패:", error);
      setUploadError("이미지 업로드에 실패했습니다. 다시 시도해주세요.");
      alert("이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false); // 업로드 종료
      // 파일 입력 초기화
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  console.log("유저정보", userData?.picture);
  return (
    <Container>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
        aria-label="프로필 이미지 업로드"
      />

      <S.HeaderContainer>
        <S.MenotorName>
          {userData?.name} {userData?.role === "MENTEE" ? "멘티님" : "멘토님"}
        </S.MenotorName>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.ProfileContainer>
          <S.ProfileBox
            onClick={() => !isUploading && fileInputRef.current?.click()}
            style={{ position: "relative", cursor: "pointer" }}
          >
            {userData?.picture ? (
              <>
                <S.ProfileLayer />
                <S.ProfileImg
                  src={userData.picture.slice(1, -1)}
                  alt="Profile"
                />
              </>
            ) : (
              <S.ProfileBase src={ProfileBase} alt="Profile" />
            )}
            <S.ProfileCamera src={Camera} />
            {isUploading ? (
              <S.UploadingOverlay>이미지 업로드 중...</S.UploadingOverlay>
            ) : (
              <S.UploadingOverlay>
                {!userData?.picture
                  ? "프로필 이미지 등록하기"
                  : "프로필 이미지 변경하기"}
              </S.UploadingOverlay>
            )}
          </S.ProfileBox>
          <S.ProfileTagContainer>
            <S.ProfileTag>{userData?.part}</S.ProfileTag>
            <S.ProfileTag>{userData?.club}</S.ProfileTag>
          </S.ProfileTagContainer>
        </S.ProfileContainer>
        <S.MenuContainer>
          <S.MenuWrapper onClick={handleMyProfileButton}>
            <S.MenuText>내 정보 관리</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleIntroduceButton}>
            <S.MenuText>자기 소개 관리</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleTimeSelectButton}>
            <S.MenuText>코고 시간 설정</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleLogout}>
            <S.MenuText>로그아웃</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" style={{ opacity: "0" }} />
          </S.MenuWrapper>
          <S.Hr />
          <S.MenuWrapper onClick={handleWithdrawal}>
            <S.MenuText>탈퇴하기</S.MenuText>
            <S.ArrowImg src={Arrow} alt="Arrow" style={{ opacity: "0" }} />
          </S.MenuWrapper>
        </S.MenuContainer>
      </S.BodyContainer>
    </Container>
  );
}
