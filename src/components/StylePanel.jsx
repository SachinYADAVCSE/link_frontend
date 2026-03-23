import { styleConfig } from "../config/styleConfig";

export default function StylePanel({ block, onStyleChange, onUpdate }) {
  // No block selected
  if (!block) return null;

  const controls = styleConfig[block.type] || [];
  const styles = block.styles || {};

  const updateStyle = (newStyles) => {
    onStyleChange(newStyles);
  };

  return (
    <div className="w-full bg-white shadow-lg p-6 rounded-lg border space-y-4">

      <h2 className="font-bold text-lg">
        Block Style — {block.type}
      </h2>

      {controls.map((control) => {
        const value = styles[control.key];

        return (
          <div key={control.key} className="flex flex-col gap-1">
            <label className="text-sm font-semibold">
              {control.label}
            </label>

            {/* COLOR */}
            {control.type === "color" && (
              <input
                type="color"
                value={value}
                onChange={(e) =>
                  updateStyle({ [control.key]: e.target.value })
                }
              />
            )}

            {/* RANGE */}
            {control.type === "range" && (
              <input
                type="range"
                min={control.min}
                max={control.max}
                value={value}
                onChange={(e) =>
                  updateStyle({
                    [control.key]: Number(e.target.value),
                  })
                }
              />
            )}

            {/* SELECT */}
            {control.type === "select" && (
              <select
                value={value}
                onChange={(e) =>
                  updateStyle({ [control.key]: e.target.value })
                }
                className="border rounded p-1"
              >
                {control.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}

            {/* Rendering for the media */}
            {control.type === "mediaLink" && (
              <>
                <h3 className="font-semibold mt-4">Video Options</h3>

                <label>
                  <input
                    type="checkbox"
                    checked={block.player?.autoplay}
                    onChange={e => onUpdate(block.id, { player: { autoplay: e.target.checked } })}
                  />
                  Autoplay
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={block.player?.muted}
                    onChange={e => onUpdate(block.id, { player: { muted: e.target.checked } })}
                  />
                  Muted
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={block.player?.controls}
                    onChange={e => onUpdate(block.id, { player: { controls: e.target.checked } })}
                  />
                  Controls
                </label>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
