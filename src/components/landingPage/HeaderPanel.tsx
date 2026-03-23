import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeaderPanel({ userData, setUserData }) {
    const [open, setOpen] = useState(true);

    const handleChange = (key, value) => {
        setUserData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        handleChange("avatar", url);
    };

    return (
        <div className="bg-white rounded-2xl shadow border">

            {/* 🔹 HEADER BAR */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl"
            >
                <span className="font-semibold text-lg">Header</span>

                {/* arrow rotate */}
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* 🔹 COLLAPSIBLE BODY */}
            <div
                className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[500px] p-4 pt-0 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-4">

                    {/* Profile picture */}
                    <div className="flex items-center justify-between border rounded-xl p-3">
                        <span className="text-sm font-medium">Profile Picture</span>

                        <label className="cursor-pointer">
                            <img
                                src={userData.avatar || "/avatar-placeholder.png"}
                                alt=""
                                className="w-14 h-14 rounded-full object-cover border"
                            />
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleImage}
                            />
                        </label>
                    </div>

                    {/* Name */}
                    <input
                        className="w-full border rounded-xl p-3 text-sm"
                        placeholder="Name"
                        value={userData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />

                    {/* Bio */}
                    <textarea
                        rows={3}
                        className="w-full border rounded-xl p-3 text-sm resize-none"
                        placeholder="Bio"
                        value={userData.bio}
                        onChange={(e) => handleChange("bio", e.target.value)}
                    />

                </div>
            </div>
        </div>
    );
}
