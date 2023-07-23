import { useState } from "react";
import RouteContext from "./context/RouteContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const [route, setRoute] = useState("/");
  return (
    <>
      <AuthProvider>
        <RouteContext.Provider value={{ route, setRoute }}>
          {route === "/" && <HomePage />}
          {route === "/login" && <LoginPage />}
          {route === "/profile" && <ProfilePage />}
        </RouteContext.Provider>
      </AuthProvider>
    </>
  );
};

export default App;
