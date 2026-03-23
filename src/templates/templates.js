export const TEMPLATES = {
    youtubeCreator: {
      name: "YouTube Creator",
  
      theme: {
        backgroundType: "color",
        backgroundColor: "#0f0f0f",
        textColor: "#ffffff",
        fontFamily: "Inter"
      },
  
      blockOverrides: {
        mediaLink: {
          styles: {
            borderRadius: 16
          }
        }
      },
  
      initialBlocks: [
        {
          type: "mediaLink",
          content: {
            title: "Watch My Latest Video",
            src: "",
            url: ""
          }
        },
        {
          type: "link",
          content: {
            title: "Instagram",
            url: ""
          }
        }
      ]
    },
  
    websiteCreator: {
      name: "Website Owner",
  
      theme: {
        backgroundType: "color",
        backgroundColor: "#ffffff",
        textColor: "#111111",
        fontFamily: "Inter"
      },
  
      blockOverrides: {},
  
      initialBlocks: [
        {
          type: "heading",
          content: { text: "Welcome to My Site" }
        },
        {
          type: "link",
          content: { title: "Visit My Website", url: "" }
        }
      ]
    }
  };
  