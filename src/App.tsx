import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import styled from "styled-components";
import MyPage from "./pages/mypage/mypage";
import TimeSelect from "./pages/main/timeselect/timeselect";

function App() {
  return (
    <Body>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* 로그인 관련 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/timeselect" element={<TimeSelect />} />
        </Routes>
      </Router>
    </Body>
  );
}

export default App;

const Body = styled.div`
  margin: 0 auto;
  max-width: 390px;
  min-width: 360px;
  margin: 0 auto;
`;
