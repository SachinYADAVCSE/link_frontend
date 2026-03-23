export default function UrlStep({ data, update }) {
    return (
      <>
        <h2 className="text-2xl font-bold mb-6">Claim a URL</h2>
  
        <div className="flex items-center border rounded p-2 w-full">
          <span className="text-gray-500 mr-2">example.co/</span>
          <input
            className="flex-1 outline-none"
            placeholder="yourname"
            onChange={(e) => update({ url: e.target.value })}
          />
        </div>
      </>
    );
  }
  