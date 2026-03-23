export default function ThemePanel({ theme, setTheme }) {
    const updateTheme = (patch) => {
      setTheme(prev => ({ ...prev, ...patch }));
    };
  
    return (
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Theme Settings</h2>
  
        {/* Background Type */}
        <select
          value={theme.backgroundType}
          onChange={(e) =>
            updateTheme({ backgroundType: e.target.value })
          }
          className="border p-2 rounded w-full"
        >
          <option value="color">Solid Color</option>
          <option value="image">Background Image</option>
        </select>
  
        {/* Color Picker */}
        {theme.backgroundType === "color" && (
          <input
            type="color"
            value={theme.backgroundColor}
            onChange={(e) =>
              updateTheme({ backgroundColor: e.target.value })
            }
          />
        )}
  
        {/* Image Upload */}
        {theme.backgroundType === "image" && (
          <input
            type="text"
            placeholder="Image URL"
            value={theme.backgroundImage}
            onChange={(e) =>
              updateTheme({ backgroundImage: e.target.value })
            }
            className="border p-2 rounded w-full"
          />
        )}
  
        {/* Global Text Color */}
        <div>
          <label className="block font-semibold">Text Color</label>
          <input
            type="color"
            value={theme.textColor}
            onChange={(e) =>
              updateTheme({ textColor: e.target.value })
            }
          />
        </div>
      </div>
    );
  }
  