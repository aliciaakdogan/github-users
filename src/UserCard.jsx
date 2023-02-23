import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  console.log(user);
  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt=""
        height="50"
        width="50"
        className="user-card-image"
      />
      <div>
        <div className="user-card-header">
          <h4>{user.login} </h4>
        </div>
        <p className="user-card-bio">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quo
          asperiores
        </p>
      </div>
    </div>
  );
}
