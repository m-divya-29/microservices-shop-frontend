import { useKeycloak } from "@react-keycloak/web";

export default function Login() {
  const { keycloak, initialized } = useKeycloak();

  return (
    <>
      <button onClick={() => keycloak.login()}>Login</button>
    </>
  );
}
