import React from "react";
import "./Error404.scss";

import Error from "../../images/error404.gif";

const Error404 = () => {
  return (
    <div className="error-404-container">
      <img src={Error} alt="Erro404.gif" />
      <h2>Página não encontrada</h2>
    </div>
  );
};

export default Error404;
