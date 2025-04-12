import keycloak from "./KeyCloakConfig";

export default function Logout() {
  return (
    <>
      <button onClick={() => keycloak.logout()}>Logout!</button>
    </>
  );
}
