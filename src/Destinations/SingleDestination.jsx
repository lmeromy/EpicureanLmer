import React, { useParams } from "react";

export const SingleDestination = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <div className="single-destination">
      <h3>{name}</h3>
    </div>
  );
};
