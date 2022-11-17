exports.userSchemaDoc = {
   User: {
      type: "object",
      properties: {
         _id: { type: "string", description: "The user ID.", example: "634a8c8c08a59397336fd053" },
         username: { type: "string", description: `The user's name.`, example: "vuongcdt" },
         email: {
            type: "string",
            description: `The user's email.`,
            example: "vuongcdt@gmail.com",
         },
         phone: {
            type: "string",
            description: "The user's phone.",
            example: `0365954275`,
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
         role: { type: "string", description: "The user's role.", default: "user" },
         salt: { type: "string", description: "The user's salt password." },
         hash: { type: "string", description: "The user's hash password." },
         createdAt: { type: "string", description: "The user's createdAt.", example: "2022-10-13T09:14:21.187Z" },
         updatedAt: { type: "string", description: "The user's updatedAt.", example: "2022-10-13T09:14:21.187Z" },
      },
   },
};
