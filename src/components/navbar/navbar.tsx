import { useLocation } from "react-router-dom";
import * as S from "./navbar.styles";
import HomeIcon from "./homeIcon";
import CogoIcon from "./cogoIcon";
import MyIcon from "./myIcon";

const Navbar = () => {
  const location = useLocation();

  return (
    <S.NavbarContainer>
      <S.NavItem to="/" $active={location.pathname === "/"}>
        <HomeIcon fill={location.pathname === "/" ? "#ffffff" : "#626262"} />
        <S.NavTitle>
          홈
        </S.NavTitle>
      </S.NavItem>
      <S.NavItem to="/cogo" $active={location.pathname === "/cogo"}>
        <CogoIcon fill={location.pathname === "/cogo" ? "#ffffff" : "#626262"} />
        <S.NavTitle>
          코고
        </S.NavTitle>
      </S.NavItem>
      <S.NavItem to="/mypage" $active={location.pathname === "/my"}>
        <MyIcon fill={location.pathname === "/my" ? "#ffffff" : "#626262"} />
        <S.NavTitle>
          MY
        </S.NavTitle>
      </S.NavItem>
    </S.NavbarContainer>
  );
};

export default Navbar;