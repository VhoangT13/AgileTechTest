/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const login = async (username) => {
    try {
      const response = await fetch(
        "https://test-react.agiletech.vn/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );
      if (response.status === 201) {
        const data = await response.json();
        if (!data.code) {
          setAccessToken(data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          return true;
        } else {
          return false;
        }
        // Set the refresh token in local storage
      } else {
        console.error("Login failed:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      return false;
    }
  };
  const logout = async () => {
    const response = await fetch(
      "https://test-react.agiletech.vn/auth/logout",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      if (data.code === 204) {
        setAccessToken(null);
        localStorage.removeItem("refreshToken");
      }
    }
  };

  // Function to get the access token and check its expiration
  const getAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return;
    }
    const response = await fetch(
      "https://test-react.agiletech.vn/auth/refresh-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (response.status === 201) {
      const data = await response.json();
      if (!data.code) {
        const newAccessToken = data.accessToken;
        setAccessToken(newAccessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      } else {
        console.error("Error", data.code);
      }
    } else {
      console.error("Error :", response.status);
    }
  };

  // Check for an existing refresh token on initial mount
  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
