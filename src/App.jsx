import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Orders from "./components/Orders";
import SecuredPage from "./components/SecuredPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./auth/KeyCloakConfig";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        {/* <Orders/> /* renders whatever is returned by Orders import */}
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
