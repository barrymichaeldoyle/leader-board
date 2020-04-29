import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { username } = useParams();

  return <h1>User Page - {username}</h1>;
};

export default UserPage;
