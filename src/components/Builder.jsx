import { DEFAULT_THEME } from "../constants/defaultTheme";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import api from "../lib/api.js";
import ThemePanel from "./ThemePanel";
import { BLOCK_DEFAULTS } from "../config/blockDefaults";
import { useUser } from "../context/UserContext";

// Layer 1
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  KeyboardSensor,
} from "@dnd-kit/core";
import HeaderPanel from "./landingPage/HeaderPanel.js";
//layer 2
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { FiLink, FiImage, FiType, } from "react-icons/fi";
import Preview from "./Preview";
import StylePanel from './StylePanel';
import BlockInspector from "./BlockInspector";
import SocialPanel from "./landingPage/SocialPanel.jsx";
import PhonePreview from "./steps/PhonePreview.jsx";

const STORAGE_KEY = "liinks_builder_blocks_v1";

// What item will have at start
function generateId() {
  return `b_${Math.random().toString(36).slice(2, 9)}`;
}

export default function Builder() {
  const pageId = useParams();
  const location = useLocation();
  const id = pageId.pageId;
  // const [selectedTemplate, setSelectedTemplate] = useState("minimal");
  // const [blocks, setBlocks] = useState(starter);
  const [blocks, setBlocks] = useState([]);
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [socials, setSocials] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [token, setToken] = useState("");
  const [pageData, setPageData] = useState({});
  const [title, setTitle] = useState("");

  // here we have differentiated the user -- user, userData
  const { user, setUser } = useUser();
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    avatar: "",
    bio: ""
  });

  // create theme selector handler
  // Handle Select Theme -- selectedType  well this is the above level selection like -- block, theme, headers 
  const handleSelectTheme = (templateKey) => {
    setSelectedId(null);
    setSelectedType("theme");
  }

  // tring to fetch the user data and feed it into the Preview Page.

  // Adding data to Auth
  // useEffect(() => {
  //   const user = localStorage.getItem("userInfo");
  //   setUserData(JSON.parse(user));
  //   setToken(localStorage.getItem('token'));
  // }, [location.pathname])

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    console.log("Token", token);
  }, [token])

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));

  // useEffect(() => {
  //   const fetchPage = async () => {
  //     const res = await api(`/links/${id}`); // here we are fetching whole link page content
  //     console.log(res, "This is fetch page");

  //     setBlocks(res.blocks);
  //     setTitle(res.title);

  //     // socials
  //     if (res.socials) {
  //       setSocials(res.socials || []);
  //     }

  //     // theme
  //     if (res.theme) {
  //       setTheme(res.theme);
  //     }

  //     // here we are fetching the user details -- based on the userId -- this is we are doing for setting the headers part.
  //     // const res_user = await api(`/auth/users/${res.userId}`); // "userId"
  //     // console.log("here is the fetching of the user", res_user);
  //     // we are setting the data from the useUser() --- component
  //     // setUserData({
  //       // _id: res_user.data._id,
  //       // name: res_user.data.profile.name,
  //       // avatar: res_user.data.profile.avatarUrl,
  //       // bio: res_user.data.profile.bio
  //     // });

  //     if (user) {
  //       setUserData({
  //         _id: user._id,
  //         name: user.profile?.name,
  //         avatar: user.profile?.avatarUrl,
  //         bio: user.profile?.bio
  //       });
  //     }

  //     // The things we will going to add, like Profile (name), heading, description. and more the next part.
  //   };

  //   fetchPage();
  // }, [id, user]);

  useEffect(() => {
    const fetchPage = async () => {
      const res = await api(`/links/${id}`);

      console.log(res, "This is fetch page");

      setBlocks(res.blocks || []);
      setTitle(res.title || "");

      if (res.socials) {
        setSocials(res.socials);
      }

      if (res.theme) {
        setTheme(res.theme);
      }
      
      console.log("How are you doing?")
       // here we are fetching the user details -- based on the userId -- this is we are doing for setting the headers part.
      const res_user = await api(`/users/${res.userId}`); // "userId"
      console.log("here is the fetching of the user", res_user);

      // we are setting the data from the useUser() --- component
      setUserData({
        _id: res_user.data._id,
        name: res_user.data.profile.name, 
        avatar: res_user.data.profile.avatarUrl,
        bio: res_user.data.profile.bio
      });

      // if (user) {
      //   setUserData({
      //     _id: user._id,
      //     name: user.profile?.name,
      //     avatar: user.profile?.avatarUrl,
      //     bio: user.profile?.bio
      //   });
      // }
    };

    fetchPage();
  }, [id]);

  // Set User Data -- Context
  // useEffect(() => {
  //   if (!user) return;

  //   setUserData({
  //     _id: user._id,
  //     name: user.profile?.name || "",
  //     avatar: user.profile?.avatarUrl || "",
  //     bio: user.profile?.bio || ""
  //   });

  //   console.log("USER CONTEXT:", user);

  // }, [user]);


  // a function to handle end of drag
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);
    const newBlocks = arrayMove(blocks, oldIndex, newIndex);
    setBlocks(newBlocks);
  };

  // simple recursive function:
  // find block by id recursively finds the id of the block and returns it.
  const findBlockById = (list, id) => {
    for (const b of list) {
      if (b.id === id) return b;

      const found = findBlockById(b.children || [], id);
      if (found) return found;
    }
    return null;
  };

  // selectedBlock --> 
  // if type is block than selectedBlock = findBlockType
  // if you are in selectedType like Block or Theme
  const selectedBlock =
    selectedType === "block"
      ? findBlockById(blocks, selectedId)
      : null;


  // here we will try to handle the Header part -- Name, Bio 
  // we need to fetch
  // 👉 Creating new blocks
  // 👉 Applying template defaults
  //  👉 Supporting nested folders  
  //  👉 Updating state immutably

  // const addBlock = (type, parentId = null) => {
  //   // getting the current Defaults templates.

  //   console.log(selectedTemplate, "Which is it.");


  //   const templateDefaults =
  //     TEMPLATES[selectedTemplate]?.blockDefaults?.[type];

  //   console.log(templateDefaults, "Ishq tere me");

  //   // if not selected template than return
  //   if (!templateDefaults) return;

  //   // newBlock -- where we have content, styles already loaded from the template.
  //   const newBlock = {
  //     id: crypto.randomUUID(),
  //     type,
  //     content: { ...templateDefaults.content },
  //     styles: { ...templateDefaults.styles },
  //     children: []
  //   };

  //   // ROOT LEVEL
  //   // here we are settings the block
  //   // if there is parentId, only than you can set the Block value 
  //   // what it is doing is, taking the whole block than adding the new child component in it.
  //   if (!parentId) {
  //     setBlocks(prev => [...prev, newBlock]);
  //     return;
  //   }

  //   // CHILD LEVEL
  //   // this code is trying to add Child at the children level, if child is yes, than do recursive, if no, add it.
  //   const addChildRecursive = (list = []) =>
  //     list.map(b =>
  //       b.id === parentId
  //         ? { ...b, children: [...b.children, newBlock] }
  //         : { ...b, children: addChildRecursive(b.children) }
  //     );

  //   setBlocks(prev => addChildRecursive(prev));
  // };

  // const [selectedTemplate, setSelectedTemplate] = useState("minimal");
  // this code is used for selecting or changing the template, -- like here we have minimal, than it will change to modern by -- handleTemplateSelect("modern") 
  // const handleTemplateSelect = (templateKey) => {
  //   setSelectedTemplate(templateKey);
  // };


  // This is where you add the block// This is where you add the block
  // const addBlock = (type, parentId = null) => {

  //   // ✅ DEFAULT CONTENT + STYLES PER TYPE

  //   // template Defaults
  //   const templateDefaults = TEMPLATES[selectedTemplate].blockDefaults[type];

  //   if (!templateDefaults) return;

  //   // fallback safety
  //   const config = defaults[type] || { content: {}, styles: {} };

  //   const newBlock = {
  //     id: generateId(),
  //     type,
  //     content: config.content,
  //     styles: config.styles, // ✅ unified styles
  //     children: [],
  //     createdAt: Date.now()
  //   };

  //   // ➕ ADD ROOT BLOCK
  //   if (!parentId) {
  //     setBlocks(prev => [...prev, newBlock]);
  //     return;
  //   }

  //   // ➕ ADD CHILD RECURSIVELY
  //   setBlocks(prev => {
  //     const addChildRecursive = (list = []) =>
  //       list.map(b =>
  //         b.id === parentId
  //           ? { ...b, children: [...b.children, newBlock] }
  //           : { ...b, children: addChildRecursive(b.children) }
  //       );

  //     return addChildRecursive(prev);
  //   });
  // };

  // it gives the YouTube video Id 

  const addBlock = (type, parentId = null) => {
    const base = BLOCK_DEFAULTS[type];

    if (!base) {
      console.warn("Unknown block type:", type);
      return;
    }

    const newBlock = {
      id: crypto.randomUUID(),
      type,
      content: { ...base.content },
      styles: { ...base.styles },
      children: []
    };

    if (!parentId) {
      setBlocks(prev => [...prev, newBlock]);
      return;
    }

    const addChildRecursive = (list = []) =>
      list.map(b =>
        b.id === parentId
          ? { ...b, children: [...b.children, newBlock] }
          : { ...b, children: addChildRecursive(b.children) }
      );

    setBlocks(prev => addChildRecursive(prev));
  };

  const getYoutubeId = (url) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };


  // This is the detectProvider function which maybe required for detecting --> Image | youtube | vimeo | video | image
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

  // this is for updating the block
  // patch is the changes you want to make
  const updateBlock = (id, patch) => {

    const updateRecursive = (list) =>
      list.map(b => {

        // where block id and id matches
        if (b.id === id) {
          // Separate content and style keys in patch
          const { content: contentPatch, styles: stylesPatch, player: playerPatch, ...restPatch } = patch;

          return {
            ...b,
            ...restPatch, // other possible fields to patch

            // Update content if present in patch
            content: contentPatch ? { ...b.content, ...contentPatch } : b.content,
            // Update style if present in patch
            styles: stylesPatch ? { ...b.styles, ...stylesPatch } : b.styles,

            player: playerPatch ? { ...b.player, ...playerPatch } : b.player,
          };
        } else {
          return { ...b, children: updateRecursive(b.children) };
        }
      });

    // at last setting the value into the updateRecursive
    setBlocks(prev => updateRecursive(prev));

    // setBlocks((prev) => prev.map(b => b.id === id ? { ...b, content: { ...b.content, ...patch } } : b));
  }

  // this is for removing the block
  const removeBlock = (id) => {
    // prev.filter(...) → makes a new array containing only the blocks whose id is not the one we’re removing.
    const removeRecursive = (list) =>
      list
        .filter(b => b.id !== id) // remove match
        .map(b => ({ ...b, children: removeRecursive(b.children) })); // clean inside

    setBlocks(prev => removeRecursive(prev));

    //  setBlocks((prev) => prev.filter(b => b.id !== id));
  }

  // clears the block
  const clearAll = () => {
    if (!confirm("Clear all blocks?")) return;
    setBlocks([]);
  }


  // Rendering the Block
  const renderBlocks = (blocks) => (
    blocks.map(block => (
      <div key={block.id} className="ml-4 border-l pl-3"> {/* indent for nesting */}

        {/* Render this block */}
        {/* We can create an outsider function which will update the data */}
        <SortableItem id={block.id}>
          <BlockEditor
            block={block}
            onUpdate={updateBlock}
            onRemove={() => removeBlock(block.id)}
            renderBlocks={renderBlocks}
            addBlock={addBlock}
            onClick={() => { setSelectedId(block.id); setSelectedType("block"); }}
          />
        </SortableItem>
      </div>
    ))
  );

  // this function is working now we need to make it dynamic
  // Function to Save changes 
  const saveData = async () => {

    // const 
    // adding results -- save link builder things
    // changes are been sent from here 
    const response = await axios.put(`http://localhost:4000/api/links/${id}`, { blocks: blocks, title: "Liinks", socials: socials, theme: theme }, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    // saving the results -- headers into User
    // 2️⃣ Save user header data

    const response_user = await axios.put(
      `http://localhost:4000/api/auth/users/${userData._id}`, // ✅ fixed url
      {
        name: userData.name,
        bio: userData.bio,
        avatar: userData.avatar
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log(response_user.data);

    if (response) {
      console.log(response);
      setPageData(response);
      // setting the Blocks
    }

    else {
      console.log("Page Not Found");
    }

  };

  // This Function is to Publish the Page Online and making it live
  const publishPage = async () => {
    try {

      const response = await axios.patch(`http://localhost:4000/api/links/${id}/publish`, { isPublished: true }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      if (response) {
        console.log(response);
      }
    } catch (err) {
      console.log("Invalid Url cannot be Accessed, Cannot be Published", err);
    }
  }


  // const selectedBlock = findBlockById(blocks, selectedBlockId);

  return (
    <div className="space-y-4 flex flex-col w-[90vw] mx-auto items-center bg-slate-200 shadow-xl rounded-md pt-15">

      <header className="flex items-center w-[80vw] justify-between shadow-lg p-6 bg-gray-100 rounded-md border ">
        {/* Here we have the page Builder part  Those Buttons*/}
        <h2 className="text-2xl font-bold ">Page Builder</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => addBlock("heading")} className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow">
            <FiType /> Heading
          </button>
          <button onClick={() => addBlock("link")} className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow">
            <FiLink /> Link
          </button>
          <button onClick={() => addBlock("media")} className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow">
            <FiImage /> Media
          </button>
          <button onClick={() => addBlock("folder")} className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow">
            < CiFolderOn /> + Add Folder
          </button>
          <button onClick={() => addBlock("mediaLink")} className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow">
            + Media Link
          </button>
          <button onClick={saveData} className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded shadow hover:bg-green-700 hover:scale-105">
            <CiSaveDown2 /> Save
          </button>
          <button onClick={publishPage} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded shadow hover:bg-blue-700 hover:scale-105">
            <MdOutlinePublishedWithChanges /> Publish
          </button>
          <button onClick={clearAll} className="ml-2 text-sm text-red-600">Clear</button>
        </div>
      </header>

      <div className="grid md:grid-cols-3 w-[90vw] bg-slate-200 p-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_350px] gap-8 w-full max-w-7xl mx-auto p-8"> */}
        {/* I guess this the block first. */}
        <div className="bg-white rounded-lg p-4 shadow border w-[26vw] flex flex-col gap-3">

          <HeaderPanel userData={userData} setUserData={setUserData} />
          <SocialPanel
            socialData={socials}
            setSocialData={setSocials}
          />

          {/* THese are those 2 girds we are seeing */}
          <p className="text-sm text-gray-500 mb-3">Drag to reorder — edit inline. Changes auto-save (localStorage).</p>

          {/* Here things are in DndContext with sensors collisionDetection */}
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            {/* Like previously we have divided the SortableContext they have used it in same file */}
            <SortableContext items={blocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
              {renderBlocks(blocks)}
            </SortableContext>
          </DndContext>

          {/* It's an Additional div which we have, But here we should have something like store these changes and Your are ready with your Linktree. */}

          <div
            onClick={handleSelectTheme}
            className="p-3 cursor-pointer hover:bg-gray-100 rounded-lg"
          >
            🎨 Theme Settings
          </div>
        </div>

        {/* This is the second block  */}
        {/* So here we are rendering the Preview Page */}
        {/* <div className="bg-white rounded-lg w-[25vw]  p-4 border shadow-lg col-span-1 "> */}
        <div className=" rounded-lg w-[25vw] p-4  shadow-lg col-span-1 flex justify-center items-start sticky top-20 h-fit">
          {/* <h3 className="font-semibold">Preview</h3> */}
          {/* <Preview name={userData.name} bio={userData.bio} avatar={userData.avatar} socials={socials} blocks={blocks} theme={theme} /> */}
          <PhonePreview
            data={{
              name: userData.name,
              bio: userData.bio,
              avatar: userData.avatar,
              socials: socials,
              blocks: blocks,
              theme: theme
            }}
          />
        </div>

        {/* This is the style panel we have */}
        {/* Here we have the style Panel */}
        <div className="bg-white rounded-lg w-full p-4 border col-span-1">
          <p className="font-bold mb-5"> style panel </p>

          <div className="bg-white rounded-lg p-4 border w-full col-span-1">
            <h3 className="font-bold mb-5">Style Panel</h3>

            {/* THEME MODE */}
            {selectedType === "theme" && (
              <ThemePanel theme={theme} setTheme={setTheme} />
            )}

            {/* BLOCK MODE */}
            {selectedType === "block" && selectedBlock && (
              <>
                <BlockInspector
                  block={selectedBlock}
                  onUpdate={updateBlock}
                />

                <StylePanel
                  block={selectedBlock}
                  onStyleChange={(newStyle) =>
                    updateBlock(selectedBlock.id, { styles: newStyle })
                  }
                  onUpdate={updateBlock}
                />
              </>
            )}

            {/* NOTHING SELECTED */}
            {!selectedType && (
              <div className="text-gray-400 text-sm">
                Select a block or Theme Settings
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// It is just like an empty, structure providing function
// Takes block for indentifing the type of block
// Takes update for Update the List, provides block.id and patch the object with current data to changed
// Provides an Html Stucture.
function BlockEditor({ block, onUpdate, onRemove, renderBlocks, addBlock, onClick }) {

  //  from here we are trying to add the folder into the Form.
  if (block.type === "group" || block.type === "folder") {

    return (
      // <div className="p-3 border rounded-lg bg-yellow-50" onClick={onClick}>
      <div className="p-3 border rounded-lg bg-yellow-50" onClick={onClick}>
        <div className="flex justify-between min-w-0 turncate">
          <strong>Folder</strong>
          <button onClick={onRemove} className="text-red-500">Delete</button>
        </div>

        <div className="mt-2">
          {block.children && renderBlocks(block.children)}

          {/* here you can use that drop-down */}
          <el-dropdown class="inline-block m-2">
            <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 bg-green-500 text-sm font-semibold text-white border inset-ring-1 inset-ring-white/5 hover:bg-green-800 ml-2">
              + Options
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-white">
                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
            </button>

            <el-menu anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-wheat-300 border outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
              <div class="py-1 ml-2 flex flex-col justify-center items-start">

                <button onClick={(e) => { e.stopPropagation(), addBlock("heading", block.id) }} className="mt-2 px-2 py-1 text-slate-800 rounded hover:105" >
                  + Add Heading
                  <hr></hr>
                </button>
                <button onClick={(e) => { e.stopPropagation(), addBlock("link", block.id) }} className="mt-2 px-2 py-1 text-slate-800 rounded hover:105" >
                  + Add Link
                  <hr></hr>
                </button>
                <button onClick={(e) => { e.stopPropagation(), addBlock("media", block.id) }} className="mt-2 px-2 py-1 text-slate-800 rounded hover:105" >
                  + Add media
                  <hr></hr>
                </button>
                {/* <button onClick={() => addBlock("folder", block.id)} className="mt-2 px-2 py-1 text-slate-800 rounded hover:105" >
                  + Add folder
                  <hr></hr>
                </button> */}
              </div>
            </el-menu>
          </el-dropdown>

        </div>
      </div>
    );
  }

  if (block.type === "heading") {
    return (
      <div className="p-3 border rounded-lg bg-white w-full min-w-0" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        <div className="flex justify-between min-w-0 truncate">
          <strong>Heading</strong>
          <button onClick={onRemove} className="text-red-500">Delete</button>
        </div>
      </div>
    );
  }

  if (block.type === "link") {
    return (
      <div className="p-3 border rounded-lg bg-white" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        <div className="flex min-w-0 justify-between truncate">
          <strong>Link</strong>
          <button onClick={onRemove} className="text-red-500">Delete</button>
        </div>

      </div>
    );
  }


  // media-Link
  {
    block.type === "mediaLink" && (
      <div
        className="p-3 border rounded-lg bg-white"
        onClick={(e) => { e.stopPropagation(); onClick(); }}
      >
        <div className="flex justify-between">
          <strong>Media Link</strong>
          <button onClick={onRemove} className="text-red-500">
            Delete
          </button>
        </div>

        <div className="mt-3 space-y-2">
          <input
            type="text"
            placeholder="Paste YouTube / Vimeo / Image URL"
            value={block.content?.src || ""}
            onChange={(e) =>
              onUpdate(block.id, {
                content: { src: e.target.value }
              })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="CTA Title"
            value={block.content?.title || ""}
            onChange={(e) =>
              onUpdate(block.id, {
                content: { title: e.target.value }
              })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Optional redirect link"
            value={block.content?.url || ""}
            onChange={(e) =>
              onUpdate(block.id, {
                content: { url: e.target.value }
              })
            }
            className="w-full border p-2 rounded"
          />
        </div>
      </div>
    )
  }

  // media
  return (
    <div className="p-3 border rounded-lg bg-white" onClick={(e) => { e.stopPropagation(); onClick(); }}>
      <div className="flex min-w-0 justify-between truncate">
        <strong>Media</strong>
        <button onClick={onRemove} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}
