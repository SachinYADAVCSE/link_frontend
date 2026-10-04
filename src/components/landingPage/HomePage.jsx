import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Folder,
  Image as ImageIcon,
  Link2,
  Play,
  Sparkles,
  Layers3,
  MousePointer2,
  Check,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function BrowserPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.15, ease }}
      className="relative mx-auto w-full max-w-[620px]"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -inset-10 rounded-[40px] bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[26px] border border-black/10 bg-[#f5f5f2] shadow-[0_30px_100px_rgba(0,0,0,0.16)]">
        {/* Browser chrome */}
        <div className="flex h-11 items-center gap-2 border-b border-black/10 bg-white px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff625c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
          <div className="mx-auto hidden h-6 w-64 items-center justify-center rounded-md bg-black/[0.035] text-[10px] text-black/40 sm:flex">
            liinks.co/creator
          </div>
        </div>

        <div className="grid min-h-[460px] grid-cols-[1fr_190px] gap-0 sm:grid-cols-[1fr_230px]">
          {/* Editor */}
          <div className="border-r border-black/10 p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
                  Visual page builder
                </p>
                <p className="mt-1 text-sm font-semibold">Your profile</p>
              </div>
              <div className="rounded-full bg-black px-3 py-1.5 text-[10px] font-semibold text-white">
                Publish
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Layers3 size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold">My Work</p>
                  <p className="text-[9px] text-black/40">Folder · 4 items</p>
                </div>
                <ChevronDown size={14} className="text-black/35" />
              </div>

              <div className="ml-5 space-y-2 border-l border-dashed border-black/15 pl-3">
                <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 shadow-sm">
                  <Link2 size={13} className="text-black/45" />
                  <span className="text-[10px] font-medium">Portfolio</span>
                  <ArrowUpRight size={11} className="ml-auto text-black/30" />
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 shadow-sm">
                  <Folder size={13} className="text-blue-500" />
                  <span className="text-[10px] font-medium">Projects</span>
                  <ChevronDown size={11} className="ml-auto text-black/30" />
                </div>

                <div className="ml-4 space-y-1.5 border-l border-dashed border-black/15 pl-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-[9px] font-medium text-blue-700">
                    Case Study — Nike
                  </div>
                  <div className="rounded-lg bg-blue-50 p-2 text-[9px] font-medium text-blue-700">
                    Case Study — Airbnb
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 shadow-sm">
                  <Play size={13} className="text-red-500" />
                  <span className="text-[10px] font-medium">Latest video</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <ImageIcon size={15} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold">Gallery</p>
                  <p className="text-[9px] text-black/40">Images & embeds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center bg-[#ecece8] p-4">
            <div className="w-[145px] rounded-[25px] border-[5px] border-[#171717] bg-white p-3 shadow-2xl sm:w-[165px]">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-black/10" />

              <div className="mx-auto h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
              <p className="mt-2 text-center text-[11px] font-bold">@creator</p>
              <p className="mt-0.5 text-center text-[8px] text-black/45">
                Design · Build · Share
              </p>

              <div className="mt-4 space-y-2">
                <div className="rounded-lg bg-black px-2 py-2 text-center text-[8px] font-semibold text-white">
                  Portfolio
                </div>

                <div className="rounded-lg border border-black/10 bg-[#f7f7f5] px-2 py-2">
                  <div className="flex items-center justify-between text-[8px] font-semibold">
                    <span>Projects</span>
                    <ChevronDown size={9} />
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="rounded-md bg-white px-2 py-1.5 text-[7px]">
                      Nike — Brand system
                    </div>
                    <div className="rounded-md bg-white px-2 py-1.5 text-[7px]">
                      Airbnb — Product
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#eef4ff] px-2 py-2 text-center text-[8px] font-semibold text-blue-700">
                  Latest video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating labels */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 top-24 hidden rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-xl sm:flex sm:items-center sm:gap-2"
      >
        <Folder size={14} className="text-blue-500" />
        <span className="text-[10px] font-semibold">Folders inside folders</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-20 hidden rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-xl sm:flex sm:items-center sm:gap-2"
      >
        <Sparkles size={14} className="text-violet-500" />
        <span className="text-[10px] font-semibold">Built your way</span>
      </motion.div>
    </motion.div>
  );
}


function BuilderShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease }}
      className="relative mx-auto mt-14 max-w-6xl"
    >
      {/* soft ambient glow */}
      <div className="absolute -inset-8 rounded-[48px] bg-blue-500/10 blur-3xl" />

      {/* Laptop */}
      <div className="relative">
        <div className="overflow-hidden rounded-[22px] border-[7px] border-[#171717] bg-[#dfe7ef] shadow-[0_45px_120px_rgba(0,0,0,0.25)]">
          {/* Laptop top camera */}
          <div className="absolute left-1/2 top-1 z-20 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/50" />

          {/* Fake browser chrome */}
          <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-[#f8f8f7] px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff625c]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
            <div className="mx-auto flex h-6 w-[48%] items-center justify-center rounded-md border border-black/5 bg-white text-[8px] text-black/35">
              liinks.co/builder
            </div>
          </div>

          {/* Builder */}
          <div className="grid min-h-[510px] grid-cols-[190px_1fr_205px] bg-[#e8eef4]">
            {/* Left: blocks */}
            <div className="border-r border-black/10 bg-[#f8fafc] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold">Page Builder</span>
                <span className="text-[7px] text-black/35">⌘K</span>
              </div>

              <div className="mb-3 grid grid-cols-2 gap-1">
                {["Heading", "Link", "Media", "Folder", "Media Link", "URL"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-md border border-black/10 bg-white px-1.5 py-2 text-center text-[7px] font-medium shadow-sm"
                    >
                      + {item}
                    </div>
                  )
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between rounded-lg border border-black/10 bg-white p-2">
                  <span className="text-[8px] font-semibold">Header</span>
                  <ChevronDown size={10} />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-black/10 bg-white p-2">
                  <span className="text-[8px] font-semibold">Socials</span>
                  <ChevronDown size={10} />
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-2 shadow-sm">
                  <div className="mb-1 flex items-center gap-1">
                    <span className="text-[8px] text-black/35">⠿</span>
                    <span className="text-[8px] font-semibold">Heading</span>
                    <span className="ml-auto text-[7px] text-red-400">Delete</span>
                  </div>

                  <div className="flex items-center gap-1 rounded border border-black/10 p-1.5">
                    <Link2 size={9} />
                    <span className="text-[7px]">Portfolio</span>
                  </div>

                  <div className="mt-1 flex items-center gap-1 rounded border border-black/10 p-1.5">
                    <Link2 size={9} />
                    <span className="text-[7px]">Instagram</span>
                  </div>
                </div>

                <div className="rounded-lg border border-amber-200 bg-[#fffbea] p-2">
                  <div className="flex items-center gap-1">
                    <Folder size={9} />
                    <span className="text-[8px] font-semibold">Projects</span>
                    <ChevronDown size={9} className="ml-auto" />
                  </div>

                  <div className="ml-3 mt-2 space-y-1 border-l border-dashed border-black/15 pl-2">
                    <div className="rounded bg-white p-1.5 text-[7px]">
                      Case Study
                    </div>
                    <div className="rounded bg-white p-1.5 text-[7px]">
                      Client Work
                    </div>
                    <div className="rounded bg-white p-1.5 text-[7px]">
                      <span className="font-semibold">+ Options</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-2">
                  <Play size={9} className="text-red-500" />
                  <span className="text-[8px] font-semibold">Media</span>
                  <span className="ml-auto text-[7px] text-red-400">Delete</span>
                </div>
              </div>
            </div>

            {/* Center: live preview */}
            <div className="flex items-center justify-center bg-[#e4ebf2] p-8">
              <div className="relative w-[185px] rounded-[29px] border-[6px] border-[#111] bg-white p-3 shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
                <div className="mx-auto mb-2 h-1 w-9 rounded-full bg-black/15" />
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-pink-400" />
                <p className="mt-2 text-center text-[10px] font-bold">
                  Priyanshu Yadav
                </p>
                <p className="text-center text-[7px] text-black/40">
                  Pharmacist · Study · Build
                </p>

                <div className="mt-3 flex justify-center gap-2 text-[8px] text-black/55">
                  <span>◎</span>
                  <span>◉</span>
                  <span>◌</span>
                  <span>◍</span>
                </div>

                <div className="mt-3 space-y-1.5">
                  <div className="rounded-md border border-black/15 bg-white px-2 py-2 text-[7px] font-medium">
                    Welcome to My Site
                  </div>
                  <div className="rounded-md border border-black/15 bg-white px-2 py-2 text-[7px]">
                    Portfolio
                  </div>

                  <div className="rounded-md border border-black/10 bg-[#fbfbf8] p-2">
                    <div className="flex items-center justify-between text-[7px] font-semibold">
                      <span className="flex items-center gap-1">
                        <Folder size={8} /> Projects
                      </span>
                      <ChevronDown size={8} />
                    </div>

                    <div className="mt-1.5 space-y-1 border-l border-dashed border-black/15 pl-2">
                      <div className="rounded bg-white px-1.5 py-1 text-[6px]">
                        Brand Identity
                      </div>
                      <div className="rounded bg-white px-1.5 py-1 text-[6px]">
                        Web Design
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-md border border-black/10">
                    <div className="h-16 bg-gradient-to-br from-blue-400 to-violet-500" />
                    <div className="flex items-center gap-1 px-2 py-1.5">
                      <Play size={8} className="text-red-500" />
                      <span className="text-[6px] font-medium">
                        Latest video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: style panel */}
            <div className="border-l border-black/10 bg-[#f8fafc] p-3">
              <p className="text-[10px] font-bold">Style Panel</p>

              <div className="mt-3 rounded-lg border border-black/10 bg-white p-2.5">
                <p className="text-[7px] font-bold uppercase tracking-wider text-black/45">
                  Content
                </p>
                <p className="mt-2 text-[8px] font-semibold">Media Link</p>
                <div className="mt-1 rounded border border-black/10 px-2 py-1.5 text-[7px] text-black/35">
                  https://youtube.com/watch?v=...
                </div>
              </div>

              <div className="mt-2 rounded-lg border border-black/10 bg-white p-2.5">
                <p className="text-[7px] font-bold uppercase tracking-wider text-black/45">
                  Block Style
                </p>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-[7px] font-medium">Overlay Color</p>
                    <div className="mt-1 flex gap-1.5">
                      <span className="h-5 w-5 rounded bg-black" />
                      <span className="h-5 w-5 rounded bg-blue-500" />
                      <span className="h-5 w-5 rounded bg-violet-400" />
                      <span className="h-5 w-5 rounded border border-black/10 bg-white" />
                    </div>
                  </div>

                  <div>
                    <p className="text-[7px] font-medium">Font Family</p>
                    <div className="mt-1 rounded border border-black/10 px-2 py-1.5 text-[7px]">
                      Inter
                    </div>
                  </div>

                  <div>
                    <p className="text-[7px] font-medium">Background Image</p>
                    <div className="mt-1 flex h-10 items-center justify-center rounded border border-dashed border-black/20 text-[7px] text-black/35">
                      + Add image
                    </div>
                  </div>

                  <div>
                    <p className="text-[7px] font-medium">Social Blur</p>
                    <div className="mt-1 h-5 rounded-full bg-gradient-to-r from-blue-200 via-violet-200 to-pink-200 blur-[1px]" />
                  </div>

                  <div>
                    <p className="text-[7px] font-medium">Rounded</p>
                    <div className="mt-2 h-1 rounded-full bg-black/10">
                      <div className="h-1 w-3/4 rounded-full bg-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="mx-auto h-4 w-[84%] rounded-b-[18px] bg-[#171717] shadow-2xl" />
        <div className="mx-auto h-2 w-[38%] rounded-b-xl bg-black/30" />

        {/* Floating annotation */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-3 top-1/3 hidden rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-xl sm:flex sm:items-center sm:gap-2"
        >
          <Layers3 size={14} className="text-blue-500" />
          <span className="text-[9px] font-semibold">
            Build it visually
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-3 bottom-1/4 hidden rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-xl sm:flex sm:items-center sm:gap-2"
        >
          <Sparkles size={14} className="text-violet-500" />
          <span className="text-[9px] font-semibold">
            See changes instantly
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    number: "01",
    icon: Folder,
    title: "Folders inside folders",
    text: "Build real hierarchy. Group links into folders, put folders inside folders, collapse sections and keep complex pages easy to navigate.",
    className: "md:col-span-2",
    visual: (
      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 font-semibold">
            <Folder size={15} className="text-blue-500" /> My content
          </div>
          <div className="ml-5 border-l border-dashed border-black/15 pl-4">
            <div className="flex items-center gap-2">
              <Folder size={14} className="text-violet-500" /> Work
            </div>
            <div className="ml-5 mt-2 border-l border-dashed border-black/15 pl-4 text-black/55">
              <div className="py-1">Case studies</div>
              <div className="py-1">Client projects</div>
              <div className="py-1">Design resources</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: MousePointer2,
    title: "Every block has a purpose",
    text: "Don't limit your page to buttons. Build with headings, links, URLs, media, folders, media links, embeds and more.",
    visual: (
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          ["Heading", "T"],
          ["Link", "↗"],
          ["Media", "▣"],
          ["Add Folder", "⌁"],
          ["Media Link", "▶"],
          ["URL", "◎"],
          ["Embed", "</>"],
          ["Image", "◫"],
          ["Video", "●"],
        ].map(([item, symbol], i) => (
          <div
            key={item}
            className="rounded-xl border border-black/10 bg-white p-3 text-xs font-medium"
          >
            <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[#f2f2ee] text-[10px] font-bold">
              {symbol}
            </span>
            <span className="text-[10px] sm:text-xs">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Style every part of the page",
    text: "Change colors, typography, radius, borders and spacing — then take it further with background images, visual overlays and social blur.",
    visual: (
      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
        <div className="grid grid-cols-2 gap-3 text-[10px] sm:grid-cols-4">
          {[
            ["Colors", "●", "bg-blue-500"],
            ["Typography", "Aa", "bg-violet-400"],
            ["Background", "▧", "bg-amber-300"],
            ["Social blur", "◌", "bg-pink-300"],
          ].map(([label, symbol, color]) => (
            <div key={label} className="rounded-xl bg-[#f7f7f4] p-3">
              <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${color}`}>
                <span className="font-bold text-white">{symbol}</span>
              </div>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group rounded-[28px] border border-black/10 bg-[#f2f2ee] p-6 sm:p-8 ${feature.className || ""}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon size={18} strokeWidth={1.8} />
        </div>
        <span className="text-xs font-medium text-black/30">{feature.number}</span>
      </div>

      <h3 className="mt-8 max-w-lg text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
        {feature.title}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
        {feature.text}
      </p>

      {feature.visual}
    </motion.article>
  );
}


const useCases = [
  {
    id: "music",
    label: "Music creator",
    eyebrow: "For artists",
    name: "Maya Rivers",
    handle: "@mayarivers",
    bio: "Singer · songwriter · new music",
    accent: "from-fuchsia-500 via-violet-500 to-indigo-500",
    soft: "bg-fuchsia-50",
    avatar: "MR",
    links: [
      { title: "Listen to my new single", meta: "Spotify · Apple Music", icon: "♫" },
      { title: "Watch the latest music video", meta: "YouTube", icon: "▶" },
      { title: "Tour dates", meta: "6 upcoming shows", icon: "✦" },
      { title: "Instagram", meta: "@mayarivers", icon: "◎" },
    ],
  },
  {
    id: "creator",
    label: "Content creator",
    eyebrow: "For creators",
    name: "Aarav Creates",
    handle: "@aaravcreates",
    bio: "YouTube · Instagram · behind the scenes",
    accent: "from-orange-400 via-pink-500 to-purple-500",
    soft: "bg-orange-50",
    avatar: "AC",
    links: [
      { title: "My latest YouTube video", meta: "12 min · 1.2M views", icon: "▶" },
      { title: "Creator resources", meta: "Tools I actually use", icon: "✦" },
      { title: "My camera setup", meta: "Full gear list", icon: "▣" },
      { title: "Work with me", meta: "Brand collaborations", icon: "↗" },
    ],
  },
  {
    id: "teacher",
    label: "Education",
    eyebrow: "For educators",
    name: "Dr. Neha Sharma",
    handle: "@neha.teaches",
    bio: "Economics · notes · exam preparation",
    accent: "from-blue-500 via-cyan-400 to-emerald-400",
    soft: "bg-blue-50",
    avatar: "NS",
    links: [
      { title: "Start here — free resources", meta: "Beginner guide", icon: "⌁" },
      { title: "Chapter-wise notes", meta: "12 folders", icon: "▤" },
      { title: "Practice tests", meta: "Weekly quizzes", icon: "✓" },
      { title: "Join my study community", meta: "Discord · 8.4K members", icon: "◎" },
    ],
  },
  {
    id: "designer",
    label: "Designer",
    eyebrow: "For creatives",
    name: "Leo Studio",
    handle: "@leostudio",
    bio: "Product designer · visual systems · freelance",
    accent: "from-lime-400 via-emerald-400 to-teal-500",
    soft: "bg-lime-50",
    avatar: "LS",
    links: [
      { title: "Selected work", meta: "12 case studies", icon: "▧" },
      { title: "UI kit", meta: "Free Figma resource", icon: "✦" },
      { title: "Client projects", meta: "Private portfolio", icon: "⌁" },
      { title: "Book a design call", meta: "30 min · Calendly", icon: "↗" },
    ],
  },
  {
    id: "product",
    label: "Digital products",
    eyebrow: "For product owners",
    name: "BuildBetter",
    handle: "@buildbetter",
    bio: "Templates · systems · tools for modern teams",
    accent: "from-violet-500 via-blue-500 to-cyan-400",
    soft: "bg-violet-50",
    avatar: "BB",
    links: [
      { title: "The Notion operating system", meta: "$29 · Digital product", icon: "▤" },
      { title: "Free startup template", meta: "Download instantly", icon: "↓" },
      { title: "Customer dashboard", meta: "Open the app", icon: "↗" },
      { title: "Product changelog", meta: "What's new", icon: "✦" },
    ],
  },
  {
    id: "video",
    label: "Video subscriptions",
    eyebrow: "For video creators",
    name: "Frame Club",
    handle: "@frameclub",
    bio: "Tutorials · breakdowns · premium video",
    accent: "from-red-500 via-orange-400 to-yellow-300",
    soft: "bg-red-50",
    avatar: "FC",
    links: [
      { title: "Latest tutorial", meta: "Premiere Pro · 18 min", icon: "▶" },
      { title: "Premium video library", meta: "128 videos", icon: "▣" },
      { title: "Join Frame Club", meta: "$9/month", icon: "✦" },
      { title: "Free editing pack", meta: "Download", icon: "↓" },
    ],
  },
  {
    id: "course",
    label: "Course seller",
    eyebrow: "For educators & experts",
    name: "Rohan Mehta",
    handle: "@rohanlearns",
    bio: "Learn Python · automation · build real projects",
    accent: "from-emerald-400 via-teal-500 to-blue-500",
    soft: "bg-emerald-50",
    avatar: "RM",
    links: [
      { title: "Python for Beginners", meta: "8-week course", icon: "▶" },
      { title: "Automation Masterclass", meta: "14 lessons", icon: "✦" },
      { title: "Free Python roadmap", meta: "PDF · 24 pages", icon: "↓" },
      { title: "Book a 1:1 session", meta: "Limited slots", icon: "↗" },
    ],
  },
];

function UseCaseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCases.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f7f7f4] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600"
            >
              One platform. Many worlds.
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.065em] sm:text-6xl"
            >
              Built differently
              <br />
              by different people.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-7 text-black/50 sm:text-lg"
            >
              A musician doesn't need the same page as a teacher. A designer
              doesn't need the same page as a course creator. Build the
              structure that makes sense for what you do.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {useCases.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-xl border px-3 py-2.5 text-left text-[10px] font-semibold transition ${
                    index === activeIndex
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white text-black/55 hover:border-black/20 hover:text-black"
                  }`}
                >
                  <span className="block text-[8px] uppercase tracking-[0.12em] opacity-50">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block">{item.label}</span>
                </button>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-[10px] font-medium text-black/40">
                Automatically switching every 2 seconds
              </span>
            </motion.div>
          </div>

          {/* Rotating phone */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[330px]"
          >
            <div className="absolute inset-x-5 top-12 h-80 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative mx-auto w-[270px] rounded-[42px] border-[7px] border-[#111] bg-[#111] p-2 shadow-[0_35px_90px_rgba(0,0,0,0.24)] sm:w-[300px]">
              <div className="relative overflow-hidden rounded-[33px] bg-white">
                {/* Dynamic top area */}
                <motion.div
                  key={`${active.id}-header`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`relative h-28 bg-gradient-to-br ${active.accent}`}
                >
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full border-[18px] border-white/10" />
                  <div className="absolute bottom-[-23px] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-black text-[10px] font-bold text-white shadow-lg">
                    {active.avatar}
                  </div>
                </motion.div>

                <div className="px-4 pb-5 pt-8">
                  <AnimateUseCase active={active} />

                  <div className="mt-4 space-y-2">
                    {active.links.map((link, index) => (
                      <motion.div
                        key={`${active.id}-${link.title}`}
                        initial={{ opacity: 0, y: 7 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.035,
                        }}
                        className="flex items-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-[0_3px_12px_rgba(0,0,0,0.04)]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-black/[0.045] text-[10px] font-semibold">
                          {link.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[9px] font-semibold">
                            {link.title}
                          </p>
                          <p className="mt-0.5 truncate text-[7px] text-black/40">
                            {link.meta}
                          </p>
                        </div>
                        <ArrowUpRight size={10} className="text-black/25" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center gap-2 text-[8px] text-black/30">
                    <span>◎</span>
                    <span>◉</span>
                    <span>◌</span>
                    <span>◍</span>
                  </div>
                </div>
              </div>

              {/* phone speaker / camera */}
              <div className="absolute left-1/2 top-3 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />
            </div>

            <div className="mx-auto mt-5 flex justify-center gap-1.5">
              {useCases.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-black"
                      : "w-1.5 bg-black/15"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimateUseCase({ active }) {
  return (
    <motion.div
      key={active.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease }}
      className="text-center"
    >
      <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-black/30">
        {active.eyebrow}
      </p>
      <h3 className="mt-1 text-[13px] font-bold tracking-[-0.03em]">
        {active.name}
      </h3>
      <p className="text-[7px] text-black/40">{active.handle}</p>
      <p className="mx-auto mt-1 max-w-[190px] text-[8px] leading-3.5 text-black/50">
        {active.bio}
      </p>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#f7f7f4] text-[#111111]"
      style={{
        fontFamily:
          '"Inter", "SF Pro Display", "SF Pro Text", ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-5">
          <Link
            to="/"
            className="text-lg font-black tracking-[-0.06em]"
          >
            liinks<span className="text-blue-500">.</span>
          </Link>

          <div className="hidden items-center gap-7 text-xs font-medium text-black/55 md:flex">
            <a href="#features" className="transition hover:text-black">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-black">
              How it works
            </a>
            <a href="#why-liinks" className="transition hover:text-black">
              Why liinks
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden rounded-full px-4 py-2 text-xs font-semibold text-black/60 transition hover:bg-black/5 hover:text-black sm:block"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="group flex items-center gap-1.5 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600"
            >
              Get started
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="absolute left-1/2 top-28 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/50"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                More than a link in bio
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-[clamp(3.5rem,7vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em]"
              >
                Your whole
                <br />
                internet.
                <br />
                <span className="text-black/30">One link.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-7 text-black/55 sm:text-lg"
              >
                Build a link-in-bio page that works like a real website.
                Organize content with nested folders, collapsible menus,
                media, links and custom blocks — all from one place.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Create your page
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-black/20 hover:bg-black/[0.03]"
                >
                  Explore features
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium text-black/40"
              >
                <span className="flex items-center gap-1.5">
                  <Check size={13} /> No coding
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={13} /> Fully customizable
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={13} /> Built for creators
                </span>
              </motion.div>
            </div>

            <BrowserPreview />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / POSITIONING STRIP */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/35 sm:justify-between sm:px-8">
          <span>Links</span>
          <span className="text-black/15">/</span>
          <span>Folders</span>
          <span className="text-black/15">/</span>
          <span>Media</span>
          <span className="text-black/15">/</span>
          <span>Embeds</span>
          <span className="text-black/15">/</span>
          <span>Design</span>
          <span className="text-black/15">/</span>
          <span>Your rules</span>
        </div>
      </section>

      {/* WHY */}
      <section id="why-liinks" className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              Not another link list
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              A link-in-bio that
              <br />
              thinks like a website.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
              Most link pages flatten everything into a list. liinks gives
              you structure. Put related content into folders, collapse it,
              nest it deeper and create a page that feels like yours.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]"
          >
            <div className="relative overflow-hidden rounded-[32px] bg-black p-7 text-white sm:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Structure
                </p>
                <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Organize everything without making your audience dig.
                </h3>

                <div className="mt-10 max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
                    <div>
                      <p className="text-xs font-semibold">@creator</p>
                      <p className="text-[9px] text-white/40">
                        Everything worth clicking
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-white/10 p-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="flex items-center gap-2">
                        <Folder size={14} /> Projects
                      </span>
                      <ChevronDown size={13} />
                    </div>

                    <div className="mt-3 space-y-1.5 border-l border-white/15 pl-3">
                      <div className="rounded-lg bg-white/10 px-3 py-2 text-[10px]">
                        Brand work
                      </div>
                      <div className="rounded-lg bg-white/10 px-3 py-2 text-[10px]">
                        Product design
                      </div>
                      <div className="rounded-lg bg-white/10 px-3 py-2 text-[10px]">
                        Case studies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-[#e9e9e4] p-7 sm:p-10">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                    <Sparkles size={19} />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">
                    Your page.
                    <br />
                    Your hierarchy.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">
                    No rigid templates forcing your content into someone
                    else's structure.
                  </p>
                </div>

                <div className="mt-12 text-[clamp(4rem,8vw,7rem)] font-semibold leading-none tracking-[-0.08em] text-black/10">
                  01—∞
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeUp} className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                The toolkit
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                More control.
                <br />
                More possibilities.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/50">
              Everything you need to turn one URL into a complete digital
              home — without writing code.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.number} feature={feature} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              From blank page
              <br />
              to your home on the web.
            </h2>
          </motion.div>

          <div className="mt-14 grid border-l border-black/10 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Build",
                text: "Add links, folders, headings, images, videos and URLs.",
              },
              {
                n: "02",
                title: "Organize",
                text: "Nest related content and make sections collapsible.",
              },
              {
                n: "03",
                title: "Publish",
                text: "Customize the look, claim your URL and share it everywhere.",
              },
            ].map((step) => (
              <motion.div
                variants={fadeUp}
                key={step.n}
                className="border-r border-b border-t border-black/10 p-7 first:border-l md:border-b-0 md:p-10"
              >
                <span className="text-xs font-semibold text-blue-600">
                  {step.n}
                </span>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-black/50">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* BUILDER SHOWCASE */}
      <section className="bg-white px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600"
            >
              See the idea become real
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              You don't just add links.
              <br />
              You build the page.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-black/50 sm:text-lg"
            >
              Drag your blocks into place, create nested folders, customize
              the style of individual sections and watch your public page
              update in the preview. The builder is where the whole system
              comes together.
            </motion.p>
          </motion.div>

          <BuilderShowcase />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {[
              {
                title: "Build",
                text: "Add any block you need.",
              },
              {
                title: "Style",
                text: "Make every section yours.",
              },
              {
                title: "Preview",
                text: "See the result as you build.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#f7f7f4] p-5"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-black/45">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* USE CASES SHOWCASE */}
      <UseCaseShowcase />

      {/* CTA */}
      <section className="px-5 pb-8 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-black px-6 py-16 text-center text-white sm:px-12 sm:py-24"
        >
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[100px]" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Your next page starts here
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.065em] sm:text-6xl">
              Stop stacking links.
              <br />
              Start building a world.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
              Create a profile that can hold everything you do, make and
              share — organized exactly the way you want.
            </p>

            <Link
              to="/register"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white"
            >
              Build your liinks
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-10 border-b border-black/10 pb-10 sm:flex-row">
            <div>
              <Link
                to="/"
                className="text-xl font-black tracking-[-0.06em]"
              >
                liinks<span className="text-blue-500">.</span>
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-6 text-black/45">
                One link for everything. Structured for creators, flexible
                enough to feel like a website.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-xs font-medium text-black/50">
              <a href="#features" className="hover:text-black">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-black">
                How it works
              </a>
              <Link to="/login" className="hover:text-black">
                Login
              </Link>
              <Link to="/register" className="hover:text-black">
                Sign up
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 py-6 text-[10px] text-black/35 sm:flex-row">
            <span>© 2026 liinks. All rights reserved.</span>
            <span>Built for people with things to share.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
