import React from "react";
import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  return (
    <div>
      {state.error ? <h1>{state.error}</h1> : <h1>Request was Successful!</h1>}
      <Link to="/">GO BACK</Link>
    </div>
  );
};

export default Success;
