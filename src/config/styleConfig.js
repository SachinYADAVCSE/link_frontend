export const styleConfig = {
  heading: [
    { key: "backgroundColor", label: "Background", type: "color" },
    { key: "color", label: "Text Color", type: "color" },
    { key: "fontSize", label: "Font Size", type: "range", min: 12, max: 48 },

    {
      key: "fontWeight",
      label: "Weight",
      type: "select",
      options: [
        { label: "Regular", value: 400 },
        { label: "Medium", value: 500 },
        { label: "Bold", value: 700 }
      ]
    },

    {
      key: "textAlign",
      label: "Align",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" }
      ]
    },

    {
      key: "fontFamily",
      label: "Font Family",
      type: "select",
      options: [
        { label: "Sans", value: "sans-serif" },
        { label: "Serif", value: "serif" },
        { label: "Mono", value: "monospace" }
      ]
    },

    { key: "borderRadius", label: "Rounded", type: "range", min: 0, max: 50 },
    { key: "borderWidth", label: "Border Width", type: "range", min: 0, max: 10 },
    { key: "borderColor", label: "Border Color", type: "color" }
  ],

  link: [
    { key: "backgroundColor", label: "Background", type: "color" },
    { key: "color", label: "Text Color", type: "color" },
    { key: "fontSize", label: "Font Size", type: "range", min: 12, max: 32 },

    { key: "borderRadius", label: "Rounded", type: "range", min: 0, max: 50 },
    { key: "borderWidth", label: "Border Width", type: "range", min: 0, max: 10 },
    { key: "borderColor", label: "Border Color", type: "color" }
  ],

  media: [
    { key: "borderRadius", label: "Rounded", type: "range", min: 0, max: 50 },
    { key: "width", label: "Width", type: "range", min: 100, max: 600 }
  ],

  mediaLink: [
    { key: "overlayColor", label: "Overlay Color", type: "color" },
    { key: "textColor", label: "Text Color", type: "color" },
    { key: "fontSize", label: "Font Size", type: "range", min: 12, max: 40 },
    { key: "borderRadius", label: "Rounded", type: "range", min: 0, max: 30 }
  ]
};