import Preview from "../Preview";
export default function PhonePreview({ data }) {
  return (
    <div className="flex justify-center items-center h-full">

      {/* Phone frame */}
      <div className="w-[340px] h-[700px] rounded-[50px] border-[3px] border-gray-900 bg-black shadow-2xl p-2">

        {/* Screen */}
        <div className="h-full rounded-[36px] bg-white overflow-y-auto no-scrollbar">
          <Preview
            name={data.name}
            bio={data.bio}
            avatar={data.avatar}
            socials={data.socials}
            blocks={data.blocks}
            theme={data.theme}
          />
        </div>

      </div>
    </div>
  );
}