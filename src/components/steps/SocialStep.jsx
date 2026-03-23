export default function SocialStep({ data, update }) {
    const set = (key, value) =>
      update({ socials: { ...data.socials, [key]: value } });
  
    return (
      <>
        <h2 className="text-2xl font-bold mb-6">Add Social Links</h2>
  
        {["Instagram", "Twitter", "Website"].map((s) => (
          <input
            key={s}
            placeholder={`${s} URL`}
            className="input mb-4"
            onChange={(e) => set(s, e.target.value)}
          />
        ))}
      </>
    );
  }
  