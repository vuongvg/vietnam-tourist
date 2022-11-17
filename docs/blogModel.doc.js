exports.blogSchemaDoc = {
   Blog: {
      type: "object",
      properties: {
         _id: { type: "string", description: "The blog ID.", example: "634a8c8c08a59397336fd053" },
         title: { type: "string", description: `The blog's title.`, example: "Get Travel Insurance" },
         content: {
            type: "string",
            description: `The blog's content.`,
            example: "No one ever expects the unexpected but it’s always great to have a safeguard just in case.",
         },
         description: {
            type: "string",
            description: "The blog's description.",
            example: `Essential travel tip: Get insured!`,
         },
         avatar: {
            type: "object",
            properties: {
               src: {
                  type: "string",
                  description: "The avatar's src.",
                  example:
                     "https://firebasestorage.googleapis.com/v0/b/vietnam-tour-1664730774283.appspot.com/o/image%2F166607841481810-Common-Travel-Mistakes-You-Can-Avoid.jpg?alt=media&token=7b65087f-efe3-4374-94e9-2227a8af93e9",
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
         typePost: { type: "string", description: "The blog's typePost.", default: "blog" },
         createdAt: { type: "string", description: "The blog's createdAt.", example: "2022-10-13T09:14:21.187Z" },
         updatedAt: { type: "string", description: "The blog's updatedAt.", example: "2022-10-13T09:14:21.187Z" },
      },
   },
};
