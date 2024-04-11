import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Login from "./components/login/loginModal";
import SignUp from "./pages/signup/signup";
import styled from "styled-components";

function App() {
  return (
    <Body>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />

          {/* 모달 확인용 임시 루트 */}
          <Route path="/login" element={<Login />} />
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
