const searchItem = [
   {
      _id: "634cc1b1685c4d6698baf0bc",
      title: "Top 15 Things to Do in Hanoi, Vietnam",
      content:
         "In a country that I always say is like a marmite land – you either love it or hate it (probs this will only make sense if you’re British, but take my word for it!) ",
      avatar: {
         src: "https://firebasestorage.googleapis.com/v0/b/vietnam-tour-1664730774283.appspot.com/o/image%2F1665974702934Top-15-Things-to-Do-in-Hanoi.jpg.webp?alt=media&token=6db9d2b0-e01c-4825-8e43-1b550c4f2468",
      },
      description: "OMG, it’s time to enter the fascinating country of Vietnam and its even more fascinating capital of Hanoi!",
      like: 0,
      createBy: {
         _id: "6321d39ebe7bf2286b823b33",
         username: "dominhhieu",
      },
      typePost: "blog",
      createdAt: "2022-10-17T02:45:05.561Z",
      updatedAt: "2022-10-17T02:45:05.561Z",
      temp: 1,
   },
   {
      _id: "634a8c8c08a59397336fd053",
      title: "Intercontinental Hanoi Westlake, An IHG Hotel",
      email: "sale@email.com",
      phone: "0968588188",
      city: "Ha Noi",
      fullLocation: "5 Tu Hoa, Ha Noi",
      avatar: {
         src: "https://www.momondo.com/rimg/himg/27/ed/51/leonardo-1140852-HANHB_4068417527_O-545141.jpg?width=510&height=510&crop=true",
      },
      album: [],
      description:
         "InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The hotel is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.",
      famous: true,
      createBy: {
         _id: "631eaef1f9b0364d944a9beb",
         username: "vuongcdt",
      },
      typePost: "hotel",
      createdAt: "2022-10-15T10:33:48.711Z",
      updatedAt: "2022-11-17T16:19:10.521Z",
      evaluate: 4.5,
      temp: 1,
   },
];

exports.searchRouteDoc = {
   "/search": {
      get: {
         tags: ["search"],
         description: `List all of the search`,
         parameters: [
            { in: "query", name: "keyword", schema: { type: "string", default: "hanoi" }, description: `Keyword of seach.  Example: hanoi` },
            { in: "query", name: "page", schema: { type: "integer", default: "" }, description: `The number of page to return.  Example: 1` },
            { in: "query", name: "limit", schema: { type: "integer", default: "" }, description: `The numbers of items to return.  Example: 5` },
         ],
         responses: {
            200: {
               description: "OK",
               content: {
                  "application/json": {
                     schema: {
                        type: "array",
                        example: searchItem,
                     },
                  },
               },
            },
         },
      },
   },
};
