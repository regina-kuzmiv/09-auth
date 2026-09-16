"use client";

import css from "./EditProfile.module.css";
import { useState } from "react";
import { updateMe } from "@/lib/api/clientApi";
import Image from "next/image";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const setUser = useAuthStore((store) => store.setUser);
  const user = useAuthStore((store) => store.user);
  const router = useRouter();
  const [username, setUserName] = useState(user?.username ?? "");
  if (user === null) {
    return null;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedUser = await updateMe({
      username,
    });
    setUser(updatedUser);
    router.push("/profile");
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image
          src={user.avatar}
          alt={user.username}
          width={120}
          height={120}
          className={css.avatar}
        />

        <form onSubmit={handleSaveUser} className={css.profileInfo}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              className={css.input}
              onChange={handleChange}
              value={username}
            />
          </div>

          <p>Email: {user.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={() => {
                router.push("/profile");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
