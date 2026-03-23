export const BASE_BLOCK_DEFAULTS = {
    heading: {
      content: { text: "New Heading" },
      styles: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        padding: 10
      }
    },
  
    link: {
      content: { title: "New Link", url: "" },
      styles: {
        padding: 14,
        borderRadius: 8,
        textAlign: "center"
      }
    },
  
    media: {
      content: { src: "" },
      styles: {
        borderRadius: 12
      }
    },
  
    folder: {
      content: { title: "New Folder" },
      styles: {
        padding: 10,
        borderRadius: 10
      }
    },
  
    mediaLink: {
      content: {
        title: "Watch My Video",
        src: "",
        url: ""
      },
      styles: {
        borderRadius: 12,
        overlayColor: "rgba(0,0,0,0.4)",
        textColor: "#ffffff"
      },
      player: {
        autoplay: false,
        muted: true,
        loop: false,
        controls: true
      }
    }
  };
  