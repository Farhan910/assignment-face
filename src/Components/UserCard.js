import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserCard = (user) => {
  console.log(user.user);
  
  return (
    <div className=" mx-auto grid  lg:grid-cols-4  md:grid-cols-2 grid-cols-6 gap-5">
      <div className="ml-[200px] my-4">
        <h1>{user.user.name.first + " " + user.user.name.last}</h1>
      </div>
      <div class="avatar">
        <div class="w-12 my-2  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user.user.picture.medium} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
