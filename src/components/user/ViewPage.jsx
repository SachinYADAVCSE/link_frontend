import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        setPage(res.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Page not found");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPage();
  }, [slug]);

  // =========================
  // Loading
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const { profile, blocks = [], theme = {} } = page;

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
            <h3
              key={block.id}
              style={styles}
              className="font-semibold"
            >
              {block.content?.text}
            </h3>
          );

        // =====================
        // LINK
        // =====================
        case "link":
          return (
            <a
              key={block.id}
              href={block.content?.url || "#"}
              target="_blank"
              rel="noreferrer"
              style={styles}
              className="block px-4 py-3 rounded transition hover:scale-[1.02]"
            >
              {block.content?.title || block.content?.url}
            </a>
          );

        // =====================
        // MEDIA
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
        // FOLDER (recursive)
        // =====================
        case "folder":
          return (
            <FolderBlock key={block.id} block={block}>
              {renderBlocks(block.children)}
            </FolderBlock>
          );

        default:
          return null;
      }
    });

  // =========================
  // Page Layout
  // =========================
  return (
    <div
      className="min-h-screen p-6 transition-all duration-300"
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
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Profile */}
      <div className="max-w-md mx-auto text-center mb-8">
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

      {/* Blocks */}
      <div className="max-w-md mx-auto space-y-4">
        {renderBlocks(blocks)}
      </div>
    </div>
  );
}

// =========================
// Folder Component (Isolated State)
// =========================
function FolderBlock({ block, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={block.styles}
      className="rounded-xl border overflow-hidden"
    >
      <button
        className="w-full px-4 py-3 font-semibold flex justify-between items-center"
        onClick={() => setOpen((o) => !o)}
      >
        {block.content?.title || "Folder"}
        <span>{open ? "⌄" : "⌃"}</span>
      </button>

      {open && (
        <div className="p-4 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}