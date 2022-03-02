import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const AuthCtx = useContext(AuthContext);
  const isLogedIn = AuthCtx.isLoggedIn;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!isLogedIn && <Route path="/auth" element={<AuthPage />} />}
        {isLogedIn && <Route path="/profile" element={<UserProfile />} />}
      </Routes>
    </Layout>
  );
}

export default App;
