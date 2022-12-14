import { useRouteError } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  const error = useRouteError();
  
  return (
    <div className="error-page">
      <h1>{error.status}</h1>
      <p>Oups! La plage que vous demandez n'existe pas</p>
      <p><a href="/">Retour sur la page d'accueil</a></p>
    </div>
  );
}