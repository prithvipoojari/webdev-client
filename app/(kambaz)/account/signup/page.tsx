"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = async () => {
    const current = await client.signup(user);
    setCurrentUser(current);
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        id="wd-username"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="button" onClick={signup} id="wd-signup-btn">
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
