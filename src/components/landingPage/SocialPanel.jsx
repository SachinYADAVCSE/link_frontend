import React, { useState } from "react";
import {
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Twitch,
  Github,
  Globe
} from "lucide-react";

const SOCIAL_PLATFORMS = [
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "twitter", label: "Twitter", icon: Twitter },
  { key: "youtube", label: "YouTube", icon: Youtube },
  { key: "twitch", label: "Twitch", icon: Twitch },
  { key: "github", label: "GitHub", icon: Github },
  { key: "website", label: "Website", icon: Globe }
];

const SocialPanel = ({ socialData = [], setSocialData }) => {
  const [open, setOpen] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  // Add Social
  const addSocial = (platformKey) => {
    const exists = socialData.find((s) => s.platform === platformKey);
    if (exists) return;

    setSocialData([
      ...socialData,
      { platform: platformKey, url: "", enabled: true }
    ]);

    setShowDialog(false);
  };

  // Update URL
  const updateUrl = (platformKey, value) => {
    setSocialData((prev) =>
      prev.map((s) =>
        s.platform === platformKey ? { ...s, url: value } : s
      )
    );
  };

  // Remove Social
  const removeSocial = (platformKey) => {
    setSocialData((prev) =>
      prev.filter((s) => s.platform !== platformKey)
    );
  };

  return (
    <div className="border rounded-2xl bg-white shadow-sm">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl"
      >
        <span className="font-bold">Socials</span>

        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[800px] p-4 pt-0 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4">

          {/* Existing Social Inputs */}
          {socialData.map((social) => {
            const platform = SOCIAL_PLATFORMS.find(
              (p) => p.key === social.platform
            );
            if (!platform) return null;

            const Icon = platform.icon;

            return (
              <div
                key={social.platform}
                className="flex items-center gap-3 border rounded-xl p-3"
              >
                <Icon className="w-5 h-5" />

                <input
                  className="flex-1 border rounded-lg p-2 text-sm"
                  placeholder={`${platform.label} URL`}
                  value={social.url}
                  onChange={(e) =>
                    updateUrl(social.platform, e.target.value)
                  }
                />

                <button
                  onClick={() => removeSocial(social.platform)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            );
          })}

          {/* Add Button */}
          <button
            onClick={() => setShowDialog(true)}
            className="w-full p-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            + Add Social
          </button>
        </div>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] max-h-[500px] overflow-y-auto rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Select a Social Platform
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_PLATFORMS.map((platform) => {
                const Icon = platform.icon;
                const alreadyAdded = socialData.some(
                  (s) => s.platform === platform.key
                );

                return (
                  <button
                    key={platform.key}
                    disabled={alreadyAdded}
                    onClick={() => addSocial(platform.key)}
                    className={`flex items-center gap-2 p-3 rounded-xl border hover:bg-gray-100 transition ${
                      alreadyAdded
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{platform.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialPanel;