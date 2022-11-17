exports.hotelSchemaDoc = {
   Hotel: {
      type: "object",
      properties: {
         _id: { type: "string", description: "The hotel ID.", example: "634a8c8c08a59397336fd053" },
         title: { type: "string", description: `The hotel's title.`, example: "Intercontinental Hanoi Westlake, An IHG Hotel" },
         description: {
            type: "string",
            description: "The hotel's description.",
            example: `InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service.`,
         },
         content: {
            type: "string",
            description: "The hotel's content.",
            example: `InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The hotel is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.`,
         },
         email: { type: "string", description: "The hotel's email.", example: "sale@email.com" },
         phone: { type: "string", description: "The hotel's phone.", example: "0968588888" },
         city: { type: "string", description: "The hotel's city.", example: "Ha Noi" },
         fullLocation: { type: "string", description: "The hotel's fullLocation.", example: "5 Tu Hoa, Ha Noi" },
         avatar: {
            type: "object",
            properties: {
               src: {
                  type: "string",
                  description: "The avatar's src.",
                  example: "https://www.momondo.com/rimg/himg/27/ed/51/leonardo-1140852-HANHB_4068417527_O-545141.jpg?width=510&height=510&crop=true",
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
         typePost: { type: "string", description: "The hotel's typePost.", default: "hotel" },
         createdAt: { type: "string", description: "The hotel's createdAt.", example: "2022-10-13T09:14:21.187Z" },
         updatedAt: { type: "string", description: "The hotel's updatedAt.", example: "2022-10-13T09:14:21.187Z" },
      },
   },
};
