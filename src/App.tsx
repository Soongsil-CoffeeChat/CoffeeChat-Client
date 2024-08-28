import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import LoginCallback from "./pages/login/LoginCallback";
import SignUp from "./pages/signup/signup";
import styled from "styled-components";
import MyPage from "./pages/mypage/mypage";
import Navbar from "./components/navbar/navbar";
import Search from "./pages/search/search";
import Time from "./pages/main/time/time";
import SearchView from "./pages/search/searchView";
import MentorProfile from "./pages/mentorProfile/mentorProfile";
import ApplyCogoTime from "./pages/applyCogo/applyCogoTime";
import ApplyCogoMemo from "./pages/applyCogo/applyCogoMemo";
import ApplyCogoComplete from "./pages/applyCogo/applyCogoComplete";
import Cogo from "./pages/cogo/cogo";
import SendCogo from "./pages/cogo/sendCogo/sendCogo";
import SendCogoDetail from "./pages/cogo/sendCogo/sendCogo_detail";
import Introduce from "./pages/mypage/Introduce/introduce";
import MyProfile from "./pages/mypage/myprofile/myprofile";
import TimeSelect from "./pages/mypage/timeselect/timeselect";

function App() {
  return (
    <Body>
      <Router>
        <AppContent />
      </Router>
    </Body>
  );
}

function AppContent() {
  const location = useLocation();

  // 로그인, 콜백, 회원가입 페이지에서는 Navbar를 숨김
  const hideNavbar = ["/login", "/callback", "/signup"].includes(
    location.pathname
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<LoginCallback />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/introduce" element={<Introduce />} />
        <Route path="/mypage/myprofile" element={<MyProfile />} />
        <Route path="/mypage/timeselect" element={<TimeSelect />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mentorprofile" element={<MentorProfile />} />
        <Route path="/applycogotime" element={<ApplyCogoTime />} />
        <Route path="/applycogomemo" element={<ApplyCogoMemo />} />
        <Route path="/applycogocomplete" element={<ApplyCogoComplete />} />
        <Route path="/cogo" element={<Cogo />} />
        <Route path="/cogo/send" element={<SendCogo />} />
        <Route path="/cogo/send/detail" element={<SendCogoDetail />} />
        <Route path="/search/searchview" element={<SearchView />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </>
  );
}

export default App;

const Body = styled.div`
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 60px; /* Navbar 높이만큼 여백 추가 */
`;
