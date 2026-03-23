export default function Stepper({ steps, current }) {
    return (
      <div className="flex items-center gap-4">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
              ${i <= current ? "bg-blue-600 text-white" : "bg-gray-300"}`}
            >
              {i + 1}
            </div>
            <span className="text-sm">{s}</span>
          </div>
        ))}
      </div>
    );
  }
  