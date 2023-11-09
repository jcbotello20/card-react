import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  return (
    <div className="col-12 mb-2 col-md-3">
      <div className="card bg-light">
        <div className="card-body">
          <img src="/ja.png" height="100" />
          <h5> Titulo </h5>
          <p>precio</p>
          <button className="btn btn-primary"> comprar </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
