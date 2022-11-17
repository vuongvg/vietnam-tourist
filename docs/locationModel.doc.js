exports.locationSchemaDoc = {
    Location: {
       type: "object",
       properties: {
          _id: { type: "string", description: "The location ID", example: "6347bbfa28b43c92e9b9bcf5" },
          title: { type: "string", description: `The location's title`, example: "Halong Bay" },
          content: {
             type: "string",
             description: `The location's content.`,
             example: "English Speaking Guide, Entrance, Boat trip & Bikes, A delicious local lunch, Bus transfers from Hanoi & returns",
          },
          description: {
             type: "string",
             description: "The location's description",
             example: `The karst seascape of Halong Bay is one of the best places to visit in the world for spellbinding sea views and is a UNESCO World Heritage Site.`,
          },
          avatar: {
             type: "object",
             properties: {
                src: {
                   type: "string",
                   description: "The avatar's src.",
                   example: "https://www.planetware.com/photos-large/VIE/vietnam-halong-bay.jpg",
                },
             },
          },
          createBy: {
             type: "object",
             properties: {
                username: {
                   type: "string",
                   description: "The createBy's username.",
                   example: "vuongcdt",
                },
                _id: {
                   type: "string",
                   description: "The createBy's id.",
                   example: "6321d39ebe7bf2286b823b33",
                },
             },
          },
          typePost: { type: "string", description: "The location's typePost.", default: "location" },
          createdAt: { type: "string", description: "The location's createdAt.", example: "2022-10-13T09:14:21.187Z" },
          updatedAt: { type: "string", description: "The location's updatedAt.", example: "2022-10-13T09:14:21.187Z" },
       },
    },
 };
 