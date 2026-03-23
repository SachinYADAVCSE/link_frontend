import { useEffect, useState } from "react";
import { uploadFile } from "../../utils/uploadFile";

export default function Profile() {
  const token = localStorage.getItem("token");

  const [profile, setProfile] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    avatarUrl: ""
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("http://localhost:4000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();
    const user = data.data;

    setProfile({
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
      bio: user.profile?.bio || "",
      avatarUrl: user.profile?.avatarUrl || ""
    });
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = await uploadFile(file);
    setProfile({ ...profile, avatarUrl: url });
  };

  const saveProfile = async () => {
    await fetch("http://localhost:4000/api/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(profile)
    });

    alert("Profile updated!");
  };

  const changePassword = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await fetch("http://localhost:4000/api/users/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword
      })
    });

    alert("Password updated!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto space-y-8">

        {/* PROFILE CARD */}

        <div className="bg-white shadow-md rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Profile Settings
          </h2>

          {/* Avatar */}

          <div className="flex items-center gap-6 mb-6">
            <img
              src={
                profile.avatarUrl ||
                "https://via.placeholder.com/120"
              }
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border"
            />

            <div>
              <input
                type="file"
                onChange={handleAvatarUpload}
                className="block text-sm text-gray-500"
              />
            </div>

          </div>

          {/* Inputs */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-600">
                Name
              </label>

              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Username
              </label>

              <input
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Email
              </label>

              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-600">
              Bio
            </label>

            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            onClick={saveProfile}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Profile
          </button>

        </div>

        {/* PASSWORD CARD */}

        <div className="bg-white shadow-md rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-6">
            Change Password
          </h2>

          <div className="space-y-4">

            <input
              type="password"
              placeholder="Current Password"
              value={passwords.currentPassword}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  currentPassword: e.target.value
                })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  newPassword: e.target.value
                })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  confirmPassword: e.target.value
                })
              }
              className="w-full border rounded-lg px-3 py-2"
            />

          </div>

          <button
            onClick={changePassword}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Password
          </button>

        </div>

      </div>

    </div>
  );
}