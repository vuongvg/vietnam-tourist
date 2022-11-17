exports.tourSchemaDoc = {
   Tour: {
      type: "object",
      properties: {
         _id: { type: "string", description: "The tour ID.", example: "634a8c8c08a59397336fd053" },
         title: { type: "string", description: `The tour's title.`, example: "2 Nights on BEST BALCONY CRUISES: All-Inclusive package" },
         content: {
            type: "string",
            description: `The tour's content.`,
            example: "English Speaking Guide, Entrance, Boat trip & Bikes, A delicious local lunch, Bus transfers from Hanoi & returns",
         },
         description: {
            type: "string",
            description: "The tour's description.",
            example: `Escape the bustling confines of Hanoi city, and breath the fresh air on this full-day rural Vietnam tour.`,
         },
         location: { type: "string", description: "The tour's location.", example: "Hoa Lư,Ninh Bình, Việt Nam" },
         province: { type: "string", description: "The tour's province.", example: "Ninh Bình" },
         price: { type: "integer", description: "The tour's price.", example: 55 },
         regularPrice: { type: "integer", description: "The tour's regularPrice.", example: 55 },
         transfer: { type: "string", description: "The tour's transfer.", example: "Camper van" },
         discount: { type: "string", description: "The tour's discount.", example: "10" },
         depart: { type: "string", description: "The tour's depart.", example: "2022-10-13T09:14:21.187Z" },
         avatar: {
            type: "object",
            properties: {
               src: {
                  type: "string",
                  description: "The avatar's src.",
                  example: "https://www.planetware.com/photos-large/VIE/vietnam-hoi-an-riverfront.jpg",
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
         typePost: { type: "string", description: "The tour's typePost.", default: "tour" },
         createdAt: { type: "string", description: "The tour's createdAt.", example: "2022-10-13T09:14:21.187Z" },
         updatedAt: { type: "string", description: "The tour's updatedAt.", example: "2022-10-13T09:14:21.187Z" },
      },
   },
};
