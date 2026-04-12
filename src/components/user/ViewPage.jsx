import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeadingBlock from "../landingPage/HeadingBlock";
import LinkBlock from "../landingPage/LinkBlock";
import { FolderItem } from "../landingPage/FolderItem";
import {
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  Facebook,
  Youtube,
  Github
} from "lucide-react";

const socialIconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  website: Globe,
  facebook: Facebook,
  youtube: Youtube,
  github: Github
};

export default function ViewPage() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // =========================
  // Fetch Public Page
  // =========================
  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://linkbackend-production-51ce.up.railway.app/api/public/${slug}`
        );

        console.log("PAGE DATA:", res.data);

        setPage(res.data);
        setError(null);
      } catch (err) {
        console.error("API ERROR:", err.response?.data || err.message);
        setError("Page not found");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPage();
  }, [slug]);

  // =========================
  // Loading State
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // =========================
  // Error State
  // =========================
  if (error || !page) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  // =========================
  // Helpers
  // =========================

  const detectProvider = (src) => {
    if (!src) return "image";

    if (src.includes("youtube.com") || src.includes("youtu.be"))
      return "youtube";

    if (src.includes("vimeo.com"))
      return "vimeo";

    if (/\.(mp4|webm|ogg)$/i.test(src)) return "video";

    return "image";
  };

  const getYoutubeId = (url) => {
    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtube.com")) {
        return parsed.searchParams.get("v");
      }

      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.slice(1);
      }

      return null;
    } catch {
      return null;
    }
  };

  // =========================
  // Data
  // =========================
  const {
    profile,
    blocks = [],
    theme = {
      backgroundType: "color",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      fontFamily: "sans-serif"
    }
  } = page;

  // =========================
  // Recursive Block Renderer
  // =========================
  const renderBlocks = (list = []) =>
    list.map((block) => {
      const styles = block.styles || {};

      switch (block.type) {
        // =====================
        // HEADING
        // =====================
        case "heading":
          return (
            <HeadingBlock
              key={block.id}
              block={block}
            />
          );

        // =====================
        // LINK
        // =====================
        case "link":
          return (
            <LinkBlock
              key={block.id}
              block={block}
            />
          );

        // =====================
        // MEDIA (image)
        // =====================
        case "media":
          return block.content?.src ? (
            <img
              key={block.id}
              src={block.content.src}
              alt=""
              style={styles}
              className="w-full rounded"
            />
          ) : null;

        // =====================
        // MEDIA LINK (video/embed)
        // =====================
        case "mediaLink": {
          const provider = detectProvider(block.content?.src);
          const player = block.player || {};
          const videoId = getYoutubeId(block.content?.src);

          return (
            <div
              key={block.id}
              className="w-full overflow-hidden rounded-xl"
              style={{ borderRadius: styles?.borderRadius }}
            >
              {/* IMAGE */}
              {provider === "image" && (
                <img
                  src={block.content.src}
                  className="w-full object-cover"
                />
              )}

              {/* YOUTUBE */}
              {provider === "youtube" && videoId && (
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=${player.autoplay ? 1 : 0}&mute=${player.muted ? 1 : 0}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

              {/* VIMEO */}
              {provider === "vimeo" && (
                <iframe
                  className="w-full aspect-video"
                  src={`https://player.vimeo.com/video/${block.content.src
                    .split("/")
                    .pop()}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}

              {/* VIDEO FILE */}
              {provider === "video" && (
                <video
                  className="w-full"
                  src={block.content.src}
                  controls={player.controls}
                  autoPlay={player.autoplay}
                  muted={player.muted}
                  loop={player.loop}
                />
              )}

              {/* Overlay Title */}
              {block.content?.title && (
                <div
                  style={{
                    background: styles.overlayColor,
                    color: styles.textColor,
                    padding: 10,
                    fontSize: styles.fontSize,
                    fontWeight: styles.fontWeight
                  }}
                >
                  {block.content.title}
                </div>
              )}
            </div>
          );
        }

        // =====================
        // FOLDER (recursive)
        // =====================
        case "folder":
          return (
            <FolderItem key={block.id} block={block}>
              {renderBlocks(block.children || [])}
            </FolderItem>
          );
        // =====================
        // DEFAULT
        // =====================
        default:
          return null;
      }
    });

  // =========================
  // UI
  // =========================
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-6 overflow-hidden">

      {/* here we are adding the below code */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor:
            theme.backgroundType === "color"
              ? theme.backgroundColor
              : undefined,
          backgroundImage:
            theme.backgroundType === "image"
              ? `url(${theme.backgroundImage})`
              : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",        // 👈 BLUR HERE
          transform: "scale(1.1)"      // 👈 prevents edge cut after blur
        }}
      />

      {/* 🔥 OPTIONAL DARK OVERLAY (looks premium) */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* 🔥 MAIN CONTENT */}
      <div
        className="relative z-10 w-full flex flex-col justify-center items-center"
        style={{
          color: theme.textColor,
          fontFamily: theme.fontFamily
        }}
      >

        {/* Profile */}
        <div className="max-w-md mx-auto text-center mb-2 mt-8">
          <img
            src={profile?.avatarUrl || "/avatar-placeholder.png"}
            className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />

          <h1 className="text-2xl font-bold break-all">
            {profile?.name}
          </h1>

          <p className="text-sm opacity-80 whitespace-pre-wrap mt-2">
            {profile?.bio}
          </p>
        </div>

        {/* SOCIALS */}
        {page.socials?.length > 0 && (
          <div className="flex justify-center gap-6 mt-4 mb-4">
            {page.socials
              .filter((s) => s.enabled !== false && s.url)
              .map((social, index) => {
                const Icon = socialIconMap[social.platform];
                if (!Icon) return null;

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-110"
                    style={{ color: theme.textColor }}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
          </div>
        )}

        {/* Blocks */}
        <div className="max-w-md mx-auto space-y-4">
          {renderBlocks(blocks)}
        </div>
        <div className="flex justify-cennter items-center gap-2 mt-10 text-xs">
          <span>
            Privacy Policy
          </span>
          <span>
            Terms Condition
          </span>
          <span>
            About the User
          </span>
        </div>
      </div>
    </div>
  );
}

// =========================
// Folder Component
// =========================
function FolderBlock({ block, children }) {
  const [open, setOpen] = useState(true); // open by default so it's visible

  return (
    <div
      style={{
        ...block.styles,
        border: "1px solid #ccc",
        borderRadius: "12px"
      }}
      className="overflow-hidden"
    >
      {/* Header */}
      <button
        className="w-full px-4 py-3 font-semibold flex justify-between items-center"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{block.content?.title || "Folder"}</span>
        <span>{open ? "⌄" : "⌃"}</span>
      </button>

      {/* Children */}
      {open && (
        <div className="p-3 space-y-3">
          {children && children.length > 0 ? (
            children
          ) : (
            <div className="text-sm opacity-50">Empty folder</div>
          )}
        </div>
      )}
    </div>
  );
}