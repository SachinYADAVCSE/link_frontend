export const uploadFile = async (file) => {
    const formData = new FormData();
  
    formData.append("file", file);
    formData.append("upload_preset", "liinks_upload");
  
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dkwmjei64/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
  
    const data = await res.json();
    console.log("CLOUDINARY RESPONSE:", data); // ⭐ ADD THIS
    
    if (!res.ok) {
        throw new Error(data.error?.message || "upload Failed");
    }
    return data.secure_url; // ⭐ THIS is what you save in DB
  };
  