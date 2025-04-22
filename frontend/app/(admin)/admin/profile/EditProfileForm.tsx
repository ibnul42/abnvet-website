"use client";

import { useState } from "react";

interface User {
  name: string;
  email: string;
}

interface EditProfileFormProps {
  user: User;
}

export default function EditProfileForm({ user }: EditProfileFormProps) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [isUpdate, setIsUpdate] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUpdate) {
      setIsUpdate(true);
      return;
    }

    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) {
        setMessage("An error occurred while updating.");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Profile updated successfully!");
        setPassword("");
        setIsUpdate(false);
      } else {
        setMessage(data.reason || "Update failed");
        setIsUpdate(false);
      }
    } catch {
      setMessage("An error occurred while updating.");
      setIsUpdate(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          disabled={!isUpdate}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded border-[#5C4033] focus-visible:outline-[#5C4033]"
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          disabled={!isUpdate}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded border-[#5C4033] focus-visible:outline-[#5C4033]"
        />
      </div>
      {isUpdate && (
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded border-[#5C4033] focus-visible:outline-[#5C4033]"
          />
        </div>
      )}
      <button
        type="submit"
        className="py-2 px-4 bg-[#5C4033] hover:bg-[#402c22] text-white rounded cursor-pointer"
      >
        Update Profile
      </button>

      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
    </form>
  );
}
