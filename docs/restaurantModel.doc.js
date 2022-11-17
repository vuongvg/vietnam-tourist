exports.restaurantSchemaDoc = {
   Restaurant: {
      type: "object",
      properties: {
         _id: { type: "string", description: "The restaurant ID.", example: "631f5ce934dbea6679e3b899" },
         title: { type: "string", description: `The restaurant's title.`, example: "Buffet Sen Hồ Tây" },
         description: {
            type: "string",
            description:
               "Escape the bustling confines of Hanoi city, and breath the fresh air on this full-day rural Vietnam tour. With a local lunch of goat meat, fried rice and local fruits onboard, you’ll be fueled for an afternoon of action, taking in the scenery by both bamboo boat and mountain bike. See local villagers going about their daily lives as you come to appreciate a quieter slice of Vietnamese culture",
         },
         content: {
            type: "string",
            description: "The restaurant's content.",
            example: `InterContinental Hanoi Westlake is an iconic restaurant in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The restaurant is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.`,
         },
         email: { type: "string", description: "The restaurant's email.", example: "sale@email.com" },
         phone: { type: "string", description: "The restaurant's phone.", example: "0968588888" },
         city: { type: "string", description: "The restaurant's city.", example: "Ha Noi" },
         fullLocation: { type: "string", description: "The restaurant's fullLocation.", example: "5 Tu Hoa, Ha Noi" },
         gmaplink: { type: "string", description: "The restaurant's gmaplink.", example: "https://goo.gl/maps/QAtrWC6JUGhpbPRe9" },
         avatar: {
            type: "object",
            properties: {
               src: {
                  type: "string",
                  description: "The avatar's src.",
                  example: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
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
         typePost: { type: "string", description: "The restaurant's typePost.", default: "restaurant" },
         createdAt: { type: "string", description: "The restaurant's createdAt.", example: "2022-10-13T09:14:21.187Z" },
         updatedAt: { type: "string", description: "The restaurant's updatedAt.", example: "2022-10-13T09:14:21.187Z" },
      },
   },
};
