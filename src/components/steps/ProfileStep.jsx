import { useRef } from "react";
import { uploadFile } from "../../utils/uploadFile.js";

export default function ProfileStep({ data, update }) {
  const fileRef = useRef();

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Uploading...");

    const url = await uploadFile(file);

    console.log("Uploaded:", url);
    console.log(url, "cloudinary url");
    
    update({ avatar: url });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Customize Profile</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={data.avatar || "/avatar-placeholder.png"}
          className="w-20 h-20 rounded-full object-cover border"
        />

        <button
          type="button"
          onClick={() => fileRef.current.click()}
          className="px-4 py-2 border rounded"
        >
          Upload Avatar
        </button>

        <input
          ref={fileRef}  // ⭐ IMPORTANT
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
        />
      </div>

      <input
        value={data.name}
        onChange={(e) => update({ name: e.target.value })}
        className="w-full border p-3 rounded"
      />

      <textarea
        value={data.bio}
        onChange={(e) => update({ bio: e.target.value })}
        className="mt-4 w-full border p-3 rounded"
      />
    </>
  );
}
