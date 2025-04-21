"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

interface Hero {
  _id: string;
  title: string;
  positions: string;
  content: string;
  background: string;
  profile1: string;
  profile2: string;
}

interface HeroProps {
  hero: Hero;
}

const HeroSection: React.FC<HeroProps> = ({ hero }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHero, setEditedHero] = useState<Hero>(hero);
  const [imageFiles, setImageFiles] = useState<
    Partial<Record<keyof Hero, File>>
  >({});
  const [imagePreviews, setImagePreviews] = useState<
    Partial<Record<keyof Hero, string>>
  >({});

  const handleChange = (field: keyof Hero, value: string) => {
    setEditedHero((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (
    field: keyof Hero,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setImagePreviews((prev) => ({ ...prev, [field]: previewURL }));
    setImageFiles((prev) => ({ ...prev, [field]: file }));
  };

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const handleSave = async () => {
    const formData = new FormData();

    // Only add changed text fields
    (["title", "positions", "content"] as (keyof Hero)[]).forEach((key) => {
      if (editedHero[key] !== hero[key]) {
        formData.append(key, editedHero[key]);
      }
    });

    // Only add image files if changed
    (["background", "profile1", "profile2"] as (keyof Hero)[]).forEach(
      (key) => {
        const file = imageFiles[key];
        if (file) {
          formData.append(key, file);
        }
      }
    );

    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) {
        alert("Unauthorized");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/hero/update/${hero._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Hero section updated successfully!");
        setIsEditing(false);
        // Optional: You might want to refetch or update the local state
      } else {
        alert(data.reason || "Update failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while updating.");
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Hero Section</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-700 hover:bg-green-800 text-white rounded cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={toggleEdit}
              className="px-3 py-1 bg-red-700 hover:bg-red-800 text-white rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={toggleEdit}
            className="px-3 py-1 bg-[#5C4033] hover:bg-[#402c22] text-white rounded cursor-pointer"
          >
            Edit
          </button>
        )}
      </div>

      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Value</th>
          </tr>
        </thead>
        <tbody>
          {["title", "positions", "content"].map((field) => (
            <tr key={field}>
              <td className="p-3 border font-medium capitalize">{field}</td>
              <td className="p-3 border">
                {isEditing ? (
                  field === "content" ? (
                    <textarea
                      value={editedHero[field as keyof Hero]}
                      onChange={(e) =>
                        handleChange(field as keyof Hero, e.target.value)
                      }
                      className="w-full border px-2 py-1 rounded border-[#5C4033] focus-visible:outline-[#5C4033]"
                      rows={4}
                    />
                  ) : (
                    <input
                      type="text"
                      value={editedHero[field as keyof Hero]}
                      onChange={(e) =>
                        handleChange(field as keyof Hero, e.target.value)
                      }
                      className="w-full border px-2 py-1 rounded border-[#5C4033] focus-visible:outline-[#5C4033]"
                    />
                  )
                ) : (
                  editedHero[field as keyof Hero]
                )}
              </td>
            </tr>
          ))}

          {(["background", "profile1", "profile2"] as (keyof Hero)[]).map(
            (imgField) => (
              <tr key={imgField}>
                <td className="p-3 border font-medium capitalize">
                  {imgField}
                </td>
                <td className="p-3 border">
                  <div className="flex items-center gap-4">
                    <Image
                      src={imagePreviews[imgField] || editedHero[imgField]}
                      alt={imgField}
                      width={100}
                      height={70}
                      className="object-cover rounded border"
                    />
                    {isEditing && (
                      <input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={(e) => handleImageChange(imgField, e)}
                        className="text-sm cursor-pointer"
                      />
                    )}
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HeroSection;
