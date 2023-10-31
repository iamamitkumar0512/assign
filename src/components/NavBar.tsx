import React from "react";
import { useRouter } from "../../node_modules/next/router";
import Link from "../../node_modules/next/link";
import navbar from "../styles/navbar.module.scss";
import { signIn, useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const session = useSession();
  const router = useRouter();
  const logoutHandler = () => {
    signOut();
    router.push("/");
  };

  return (
    <div className={navbar.container}>
      <div className={navbar.brandImg}>
        <Link href="/">
          <img
            src="/assets/eshkon.png"
            alt="brandPic"
            className={navbar.brandImg}
          ></img>
        </Link>
      </div>
      {!session.data ? (
        <button onClick={() => signIn()} className={navbar.button}>
          Login
        </button>
      ) : (
        <div>
          <button
            onClick={() => router.push("/dashboard")}
            className={navbar.button}
          >
            DashBoard
          </button>
          <button className={navbar.logoutButton} onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
