import React, { useEffect } from "react";
import { FolderItem } from "../components/landingPage/FolderItem";
import LinkBlock from "./landingPage/LinkBlock.jsx";
import HeadingBlock from "./landingPage/HeadingBlock.jsx";

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

export default function Preview({ name, bio, avatar, blocks = [], socials = [], theme }) {

  useEffect(() => {
    console.log(blocks, "#####Preview");
  }, [blocks]);

  useEffect(() => {
    console.log("SOCIALS:", socials);
  }, [socials]);

  const detectProvider = (src) => {
    if (!src) return "image";

    if (src.includes("youtube.com") || src.includes("youtu.be"))
      return "youtube";

    if (src.includes("vimeo.com"))
      return "vimeo";

    if (/\.(mp4|webm|ogg)$/i.test(src))
      return "video";

    return "image";
  };

  const getYoutubeId = (url) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // getEmbedUrl
  const getEmbedUrl = (src, provider, player) => {
    if (provider === "youtube") {
      const id = src.includes("v=")
        ? src.split("v=")[1].split("&")[0]
        : src.split("/").pop();

      return `https://www.youtube.com/embed/${id}?autoplay=${+player.autoplay}&mute=${+player.muted}&loop=${+player.loop}&controls=${+player.controls}`;
    }

    if (provider === "vimeo") {
      const id = src.split("/").pop();
      return `https://player.vimeo.com/video/${id}?autoplay=${+player.autoplay}&muted=${+player.muted}&loop=${+player.loop}`;
    }

    return src;
  };


  // ✅ reusable renderer (recursive)
  const renderBlocks = (list = []) =>
    list.map((b) => {

      const styles = b.styles || {}; // ⭐ unified styles

      switch (b.type) {

        // =========================
        // HEADING
        // =========================
        case "heading":
          return <HeadingBlock key={b.id} block={b} />;
        // =========================
        // LINK
        // =========================
        case "link":
          return <LinkBlock key={b.id} block={b} />;

        // =========================
        // MEDIA
        // =========================
        case "media":
          return b.content.src ? (
            <img
              key={b.id}
              src={b.content.src}
              alt=""
              style={styles}
              className="w-full"
            />
          ) : (
            <div key={b.id} className="p-4 bg-white text-gray-500">
              No media
            </div>
          );

        // =========================
        // MediaLink
        // =========================
        case "mediaLink": {
          const provider = detectProvider(b.content.src);
          const player = b.player || {};

          return (
            <div
              key={b.id}
              className="w-full overflow-hidden rounded-xl"
              style={{ borderRadius: b.styles?.borderRadius }}
            >

              {/* IMAGE */}
              {provider === "image" && (
                <img
                  src={b.content.src}
                  className="w-full object-cover"
                />
              )}

              {/* YOUTUBE */}
              {provider === "youtube" && (
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${getYoutubeId(b.content.src)}?autoplay=${player.autoplay ? 1 : 0}&mute=${player.muted ? 1 : 0}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

              {/* VIMEO */}
              {provider === "vimeo" && (
                <iframe
                  className="w-full aspect-video"
                  src={`https://player.vimeo.com/video/${b.content.src.split("/").pop()}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}

              {/* MP4 */}
              {provider === "video" && (
                <video
                  className="w-full"
                  src={b.content.src}
                  controls={player.controls}
                  autoPlay={player.autoplay}
                  muted={player.muted}
                  loop={player.loop}
                />
              )}

              {/* Overlay Title */}
              {b.content.title && (
                <div
                  style={{
                    bottom: 0,
                    width: "100%",
                    background: b.styles.overlayColor,
                    color: b.styles.textColor,
                    padding: 10,
                    fontSize: b.styles.fontSize,
                    fontWeight: b.styles.fontWeight
                  }}
                >
                  {b.content.title}
                </div>
              )}
            </div>
          );
        }

        // =========================
        // FOLDER (recursive)
        // =========================
        case "folder":
          return (
            <div key={b.id} style={styles}>
              <FolderItem block={b}>
                {renderBlocks(b.children)}
              </FolderItem>
            </div>
          );

        default:
          return null;
      }
    });

  return (
    <div
      className="pt-10 p-5 rounded min-h-screen transition-all duration-300"
      style={{
        backgroundColor:
          theme?.backgroundType === "color"
            ? theme?.backgroundColor
            : undefined,
        backgroundImage:
          theme?.backgroundType === "image"
            ? `url(${theme?.backgroundImage})`
            : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: theme?.textColor,
        fontFamily: theme?.fontFamily
      }}
    >

      {/* Profile */}
      <div className="max-w-md mx-auto text-center mb-6">

        <img
          src={avatar || "/avatar-placeholder.png"}
          className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
        />

        <div className="text-2xl font-bold break-all">
          {name || "Name"}
          {console.log(name, "this is me printing the name from frontend")}
        </div>

        <div className="text-sm text-gray-500 whitespace-pre-wrap mt-1">
          {bio || "bio"}
        </div>
      </div>

      {/* ========================= */}
      {/* SOCIALS SECTION ⭐ */}
      {/* ========================= */}

      {socials?.length > 0 && (
        <div className="flex justify-center gap-6 mt-4 mb-3">
          {socials
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
                  style={{ color: theme?.textColor }}
                >
                  <Icon size={22} />
                </a>
              );
            })}
        </div>
      )}


      {/* Blocks */}
      <div className="space-y-3">
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
  );
}
