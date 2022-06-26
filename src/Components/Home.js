import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase.init";
import UserCard from "./UserCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  if (!users) {
    return <Skeleton height={10} />;
  }

  
  console.log(users?.results);
  return (
    <div>
      {users?.results?.map((user) => (
        <UserCard user={user}></UserCard>
      ))}
    </div>
  );
};

export default Home;
