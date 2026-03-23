import { useNavigate } from "react-router-dom";

export default function FinishStep({ data }) {
  const navigate = useNavigate();
  console.log(data, "we are printing the data");

  const token = localStorage.getItem('token');
  const handleFinish = async () => {
 
    try {
      const res = await fetch("http://localhost:4000/api/links/createPage", {
        method: "POST",
        // we are passing the Content-Type -- AND WE DON'T HAVE -- token
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name: data.name,
          bio: data.bio,
          url: data.url,
          avatar: data.avatar,
          blocks: data.blocks,
          theme: data.theme, // ⭐ critical
          templateId: data.template,
        })
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      console.log(result, "FinishStep");
      navigate(`/user-custom-builder/${result.pageId}`);
    } catch (err) { 
      console.error(err);
      alert("Failed to create page");
    }
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={handleFinish}
        disabled={!data.blocks?.length} // []
        className="bg-green-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        Finish & Go Builder 🚀
      </button>
    </div>
  );
}
