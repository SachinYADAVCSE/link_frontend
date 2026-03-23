import { useState } from "react";

export default function LinksStep({ next, prev, updateData }) {
  const [links, setLinks] = useState([""]);

  const addLink = () => setLinks([...links, ""]);

  const changeLink = (i, value) => {
    const copy = [...links];
    copy[i] = value;
    setLinks(copy);
  };

  const handleNext = () => {
    updateData({ links });
    next();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add Links</h2>

      <div className="space-y-3">
        {links.map((link, i) => (
          <input
            key={i}
            className="w-full border rounded-lg p-3"
            placeholder="https://example.com"
            value={link}
            onChange={(e) => changeLink(i, e.target.value)}
          />
        ))}
      </div>

      <button
        onClick={addLink}
        className="mt-3 text-blue-600 text-sm"
      >
        + Add another
      </button>

      <div className="flex justify-between mt-6">
        <button onClick={prev} className="px-4 py-2 border rounded-lg">
          Back
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Finish
        </button>
      </div>
    </div>
  );
}
