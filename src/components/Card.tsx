import React from "react";
import dash from "../styles/card.module.scss";

const Card = ({ session }: any) => {
  return (
    <div className={dash.card}>
      <img
        src={session?.data?.user?.image || "/assets/eshkon.png"}
        alt="User Profile"
        className={dash.userImage}
      />
      <div className={dash.userName}>{session?.data?.user?.name}</div>
      <div className={dash.userEmail}>{session?.data?.user?.email}</div>
    </div>
  );
};

export default Card;
