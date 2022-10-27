const { default: mongoose } = require("mongoose");
const request = require("supertest");
const { app } = require("./app");
const { connectDb } = require("./db/connectDb");

const idTest = mongoose.Types.ObjectId.createPk().toString().slice(10);

const ramdomNumber = Math.floor(Math.random() * 1000);
const token =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFlYWVmMWY5YjAzNjRkOTQ0YTliZWIiLCJpYXQiOjE2NjU5MzE5OTYsImV4cCI6MTc1MjMzMTk5Nn0.jNPTrVr6l-mB4ScAZcpfhbsmHRdRaXaSTYjSh5DCGiM";

const newUser = {
   username: `test-${idTest}`,
   email: `${idTest}@email.com`,
   password: `${idTest}`,
};

const keywordSearch = "buffet";

const newHotel = {
   title: "Intercontinental Hanoi Westlake, An IHG Hotel",
   description: "InterContinental Hanoi Westlake",
   content: "InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho",
   email: `sale${ramdomNumber}@email.com`,
   phone: `0968588${ramdomNumber}`,
   city: "Ha Noi",
   fullLocation: "5 Tu Hoa, Ha Noi",
   avatar: {
      src: "https://www.momondo.com/rimg/himg/27/ed/51/leonardo-1140852-HANHB_4068417527_O-545141.jpg?width=510&height=510&crop=true",
   },
};
const newBlog = {
   title: "Get Travel Insurance",
   content: "No one ever expects the unexpected but it’s always great to have a safeguard just in case.",
   avatar: {
      src: "https://firebasestorage.googleapis.com/v0/b/vietnam-tour-1664730774283.appspot.com/o/image%2F166607841481810-Common-Travel-Mistakes-You-Can-Avoid.jpg?alt=media&token=7b65087f-efe3-4374-94e9-2227a8af93e9",
   },
   description: "Essential travel tip: Get insured!",
};

const newLocation = {
   title: "Halong Bay",
   avatar: {
      src: "https://www.planetware.com/photos-large/VIE/vietnam-halong-bay.jpg",
   },
   description:
      "The karst seascape of Halong Bay is one of the best places to visit in the world for spellbinding sea views and is a UNESCO World Heritage Site.",
};

const newRestaurant = {
   title: "Buffet Sen Ho Tay",
   email: `sale${ramdomNumber}@email.com`,
   phone: `0968588${ramdomNumber}`,
   city: "Ha Noi",
   fullLocation: "614 Lac Long Quan, Tay Ho, Ha Noi",
   gmaplink: "https://goo.gl/maps/QAtrWC6JUGhpbPRe9",
   avatar: {
      src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
   },
   album: [
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
   ],
   description: " SEN l Buffet Viet Nam",
   isfamous: "famous",
};

const newTour = {
   title: "2 Nights on BEST BALCONY CRUISES: All-Inclusive package",
   content: "If you're feeling more active, go kayaking, swimming, biking,",
   avatar: {
      src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/a7/b9/cf.jpg",
   },
   description: "Take your time exploring UNESCO-listed Halong Bay on a comfortable 3-day cruise.",
   location: "Halong, Quang Ninh, Vietnam",
   province: "Quang Ninh",
   price: 55,
   regularPrice: 55,
   transfer: "Camper van",
};

const user = {
   _id: expect.any(String),
   username: expect.any(String),
   email: expect.any(String),
   // phone: expect.any(String),
   // avatar: expect.objectContaining({ src: expect.any(String) }),
};

const hotelItem = {
   _id: expect.any(String),
   title: expect.any(String),
   description: expect.any(String),
   createBy: expect.objectContaining({ _id: expect.any(String), username: expect.any(String) }),
   isfamous: expect.any(String),
   avatar: expect.objectContaining({ src: expect.any(String) }),
   typePost: expect.any(String),
   album: expect.any(Array),
   email: expect.any(String),
   phone: expect.any(String),
   city: expect.any(String),
   fullLocation: expect.any(String),
   // album: expect.arrayContaining([expect.objectContaining({ src: expect.any(String) })]),
   // evaluate: expect.any(Number),
};

const blogItem = {
   _id: expect.any(String),
   title: expect.any(String),
   description: expect.any(String),
   avatar: expect.objectContaining({ src: expect.any(String) }),
   createBy: expect.objectContaining({ _id: expect.any(String), username: expect.any(String) }),
   // typePost: expect.any(String),
   content: expect.any(String),
   like: expect.any(Number),
};

const locationItem = {
   _id: expect.any(String),
   title: expect.any(String),
   description: expect.any(String),
   avatar: expect.objectContaining({ src: expect.any(String) }),
   createBy: expect.objectContaining({ _id: expect.any(String), username: expect.any(String) }),
   typePost: expect.any(String),
};

const restaurantItem = {
   _id: expect.any(String),
   title: expect.any(String),
   description: expect.any(String),
   avatar: expect.objectContaining({ src: expect.any(String) }),
   email: expect.any(String),
   phone: expect.any(String),
   city: expect.any(String),
   fullLocation: expect.any(String),
   gmaplink: expect.any(String),
   album: expect.any(Array),
   createBy: expect.objectContaining({ _id: expect.any(String), username: expect.any(String) }),
   // isfamous: expect.any(String),
   // typePost: expect.any(String),
};

const tourItem = {
   _id: expect.any(String),
   title: expect.any(String),
   description: expect.any(String),
   avatar: expect.objectContaining({ src: expect.any(String) }),
   createBy: expect.objectContaining({ _id: expect.any(String), username: expect.any(String) }),
   content: expect.any(String),
   location: expect.any(String),
   province: expect.any(String),
   price: expect.any(Number),
   regularPrice: expect.any(Number),
   transfer: expect.any(String),
   // isfamous: expect.any(String),
   // typePost: expect.any(String),
};

const listTestAPI = [
   { name: "hotel", document: hotelItem, newDocument: newHotel, idItem: "634a8c8c08a59397336fd053" },
   { name: "blog", document: blogItem, newDocument: newBlog, idItem: "63310ae8c894be068fe83640" },
   { name: "tour", document: tourItem, newDocument: newTour, idItem: "6347d6ed61381330fa2f3397" },
   { name: "location", document: locationItem, newDocument: newLocation, idItem: "6347bbfa28b43c92e9b9bcf5" },
   { name: "restaurant", document: restaurantItem, newDocument: newRestaurant, idItem: "631f5ce934dbea6679e3b899" },
];

describe("------ API------", () => {
   beforeAll(() => {
      connectDb();
   });

   afterAll((done) => {
      mongoose.disconnect(done);
   });

   describe(`\n------ Search API ------`, () => {
      it(`GET /search  --> search all posts`, () => {
         return request(app)
            .get(`/api/search?keyword=${keywordSearch}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
               expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(locationItem)]));
               expect(res.body.every((item) => JSON.stringify(item).match(new RegExp(keywordSearch, "i")))).toBe(true);
            });
      });
      it(`GET /search  --> search not found`, () => {
         return request(app)
            .get(`/api/search?keyword=gbdfgdfg`)
            .expect("Content-Type", /json/)
            .expect(200) 
            .then((res) => expect(res.body).toEqual([]));
      });
   });

   // return;

   describe(`\n------ Auth API ------`, () => {
      it(`POST /auth/register  --> created user`, () => {
         return request(app)
            .post(`/api/auth/register`)
            .send(newUser)
            .expect("Content-Type", /json/)
            .expect(201)
            .then((res) => {
               expect(res.body).toEqual(expect.objectContaining(user));
            });
      });
      it(`POST /auth/login  --> login user`, () => {
         return request(app)
            .post(`/api/auth/login`)
            .send(newUser)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
               expect(res.body).toEqual(expect.objectContaining({ ...user, role: expect.any(String), token: expect.any(String) }));
               newUser._id = res.body._id;
               newUser.token = res.body.token;
            });
      });
   });

   describe(`\n------ User API ------`, () => {
      it(`GET /user/id  --> get user by id`, () => {
         return request(app)
            .get(`/api/user/${newUser._id}`)
            .set("Authorization", "Bearer " + newUser.token)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
               expect(res.body).toEqual(expect.objectContaining(user));
            });
      });

      it(`GET /user  --> list user`, () => {
         return request(app)
            .get(`/api/user`)
            .set("Authorization", "Bearer " + token)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
               expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ ...user, role: expect.any(String) })]));
            });
      });

      it(`PUT /user  --> update user`, () => {
         return request(app)
            .put(`/api/user/${newUser._id}`)
            .set("Authorization", "Bearer " + newUser.token)
            .send(newUser)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
               expect(res.body).toEqual(expect.objectContaining({ ...user, role: expect.any(String) }));
               newUser._id = res.body._id;
            });
      });

      it(`DELETE /user  --> delete user`, () => {
         return request(app)
            .delete(`/api/user`)
            .set("Authorization", "Bearer " + newUser.token)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
               expect(res.body).toEqual(expect.objectContaining({ ...user, role: expect.any(String) }));
            });
      });
   });

   listTestAPI.map((item) => {
      return describe(`\n------ ${item.name.toLocaleUpperCase()} API ------`, () => {
         it(`GET /${item.name}  --> array ${item.name}s`, () => {
            return request(app)
               .get(`/api/${item.name}`)
               .expect("Content-Type", /json/)
               .expect(200)
               .then((res) => {
                  expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(item.document)]));
               });
         });

         it(`GET /${item.name}/id  --> specific ${item.name} by ID`, () => {
            return request(app)
               .get(`/api/${item.name}/${item.idItem}`)
               .expect("Content-Type", /json/)
               .expect(200)
               .then((res) => {
                  expect(res.body).toEqual(expect.objectContaining(item.document));
                  [item.newDocument].title = res.body.title;
               });
         });

         it(`GET /${item.name}/id  -->  404 if not found`, () => {
            return request(app)
               .get(`/api/${item.name}/123`)
               .expect("Content-Type", /text\/html/)
               .expect(404)
               .then((res) => {
                  expect(res.text).toEqual(expect.stringContaining("Invalid Id"));
               });
         });

         it(`PUT /${item.name}/id   --> update ${item.name}`, () => {
            return request(app)
               .put(`/api/${item.name}/${item.idItem}`)
               .set("Authorization", "Bearer " + token)
               .send({
                  title: "test update title",
               })
               .expect("Content-Type", /json/)
               .expect(200)
               .then((res) => {
                  expect(res.body).toEqual(
                     expect.objectContaining({ matchedCount: expect.any(Number), modifiedCount: expect.any(Number), id: expect.any(String) })
                  );
               });
         });

         it(`PUT /${item.name}/id   --> ReUpdate ${item.name}`, () => {
            return request(app)
               .put(`/api/${item.name}/${item.idItem}`)
               .set("Authorization", "Bearer " + token)
               .send({
                  title: item.newDocument.title,
               })
               .expect("Content-Type", /json/)
               .expect(200)
               .then((res) => {
                  expect(res.body).toEqual(
                     expect.objectContaining({ matchedCount: expect.any(Number), modifiedCount: expect.any(Number), id: expect.any(String) })
                  );
               });
         });

         it(`PUT /${item.name}/id  -->  404 if not found`, () => {
            return request(app)
               .put(`/api/${item.name}/123`)
               .set("Authorization", "Bearer " + token)
               .expect("Content-Type", /text\/html/)
               .expect(404)
               .then((res) => {
                  expect(res.text).toEqual(expect.stringContaining("Invalid Id"));
               });
         });

         it(`PUT /${item.name}/id  -->  400 if Authorization failed`, () => {
            return request(app)
               .put(`/api/${item.name}/123`)
               .expect("Content-Type", /text\/html/)
               .expect(400)
               .then((res) => {
                  expect(res.text).toEqual(expect.stringContaining("Authorization failed"));
               });
         });

         it(`POST /${item.name}  --> created ${item.name}`, () => {
            return request(app)
               .post(`/api/${item.name}`)
               .set("Authorization", "Bearer " + token)
               .set("Content-Type", "application/json")
               .send(item.newDocument)
               .expect("Content-Type", /json/)
               .expect(201)
               .then((res) => {
                  expect(res.body).toEqual(expect.objectContaining(item.document));
                  item.newDocument._id = res.body._id;
               });
         });

         !["blog", "tour", "location"].includes(item.name) &&
            it(`POST /${item.name}  --> duplicate`, () => {
               const itemTest = { ...item.newDocument, _id: undefined };
               return request(app)
                  .post(`/api/${item.name}`)
                  .set("Authorization", "Bearer " + token)
                  .set("Content-Type", "application/json")
                  .send(item.newDocument)
                  .send(itemTest)
                  .expect("Content-Type", /text\/html/)
                  .expect(400)
                  .then((res) => {
                     expect(res.text).toEqual(expect.stringMatching(/duplicate/));
                  });
            });

         it(`POST /${item.name}/id  -->  400 Router not exist`, () => {
            return request(app)
               .post(`/api/${item.name}/123`)
               .set("Authorization", "Bearer " + token)
               .expect("Content-Type", /text\/html/)
               .expect(404)
               .then((res) => {
                  expect(res.text).toEqual(expect.stringContaining("Router does not exist"));
               });
         });

         it(`DELETE /${item.name}/id   --> delete ${item.name}`, () => {
            return request(app)
               .delete(`/api/${item.name}/${item.newDocument._id}`)
               .set("Authorization", "Bearer " + token)
               .expect("Content-Type", /json/)
               .expect(200)
               .then((res) => {
                  expect(res.body).toEqual(
                     expect.objectContaining({ acknowledged: expect.any(Boolean), deletedCount: expect.any(Number), id: expect.any(String) })
                  );
               });
         });

         it(`DELETE /${item.name}/id  -->  404 if not found`, () => {
            return request(app)
               .delete(`/api/${item.name}/123`)
               .set("Authorization", "Bearer " + token)
               .expect("Content-Type", /text\/html/)
               .expect(404)
               .then((res) => {
                  expect(res.text).toEqual(expect.stringContaining("Invalid Id"));
               });
         });
      });
   });
});
