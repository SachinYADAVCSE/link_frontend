import { useEffect, useState } from "react";
import api from "../../lib/api.js";

export default function TemplateStep({ data, update }) {
  const [templates, setTemplates] = useState([]);
  const [user, setUser] = useState(null); // better default

  // Load templates on mount
  useEffect(() => {
    loadTemplates();
  }, []);

  // Load profile only when user.id exists
  useEffect(() => {
    if (user?.id) {
      loadProfileDetails(user.id);
    }
  }, [user?.id]); // dependency optimized

  const loadTemplates = async () => {
    try {
      const res = await api("/templates");

      setTemplates(res?.templates || []);
      setUser(res?.user || null);

      console.log("Templates API response:", res);
    } catch (err) {
      console.error("Failed to load templates", err);
    }
  };

  const loadProfileDetails = async (id) => {
    try {
      const res = await api(`/users/${id}`);
      console.log("User profile response:", res);
    } catch (err) {
      console.error("Failed to load profile", err);
    }
  };

  return (
    <div className="h-[300px]">
      <h2 className="text-2xl font-bold mb-6">
        Pick a Template {user?.username && `, ${user.username}`}
      </h2>

      <div className="space-y-4">
        {templates.map((t) => (
          <div
            key={t._id}
            onClick={() =>
              update({
                template: t._id,
                theme: {
                  backgroundType: "color",
                  backgroundColor: "#ffffff",
                  textColor: "#000000",
                  fontFamily: "Inter",
                  ...t.theme,
                },
                blocks: (t.blocks || []).map((block) => ({
                  ...block,
                  id: crypto.randomUUID(),
                  children: block.children || [],
                })),
              })
            }
            className={`p-4 border rounded-xl cursor-pointer transition ${
              data.template === t._id
                ? "border-blue-600 bg-blue-50"
                : "hover:bg-gray-50"
            }`}
          >
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
}