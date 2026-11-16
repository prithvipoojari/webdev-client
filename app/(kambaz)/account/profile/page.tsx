"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      client
        .profile()
        .then((user) => {
          if (!user) {
            router.push("/account/signin");
            return;
          }
          setCurrentUser(user);
        })
        .catch(() => router.push("/account/signin"));
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router, setCurrentUser]);

  const updateProfile = async () => {
    if (!profile) return;
    const updatedProfile = await client.updateUser(profile);
    setCurrentUser(updatedProfile);
  };

  const signout = async () => {
    await client.signout();
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) =>
          setProfile({ ...profile, role: e.target.value as User["role"] })
        }
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button type="button" onClick={updateProfile}>
        Update
      </button>
      <button type="button" onClick={signout} id="wd-signout-btn">
        Sign out
      </button>
    </div>
  );
}