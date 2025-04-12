import { useKeycloak } from "@react-keycloak/web";
import Login from "./Login";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : <Login/>;
};

export default PrivateRoute;