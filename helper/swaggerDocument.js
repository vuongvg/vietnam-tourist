
const { hotelRouteDoc } = require("../router/hotel.doc");
const { blogRouteDoc } = require("../router/blog.doc");
const { locationRouteDoc } = require("../router/location.doc");
const { tourRouteDoc } = require("../router/tour.doc");
const { restaurantRouteDoc } = require("../router/restaurant.doc");
const { userRouteDoc } = require("../router/user.doc");
const { authRouteDoc } = require("../router/auth.doc");
const { hotelSchemaDoc } = require("../models/hotelModel.doc");
const { blogSchemaDoc } = require("../models/blogModel.doc");
const { tourSchemaDoc } = require("../models/tourModel.doc");
const { searchRouteDoc } = require("../router/search.doc");

exports.swaggerDocument = {
   openapi: "3.0.0",
   info: {
      title: "Express API for VietNamTour",
      version: "1.0.0",
   },
   servers: [
      {
         url: "https://vietnam-tourist.vercel.app/api",
         description: "Product server",
      },
      {
         url: "http://localhost:5001/api",
         description: "Development server",
      },
   ],
   components: {
      securitySchemes: {
         bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            description:
               "Example:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFlYWVmMWY5YjAzNjRkOTQ0YTliZWIiLCJpYXQiOjE2NjU5MzE5OTYsImV4cCI6MTc1MjMzMTk5Nn0.jNPTrVr6l-mB4ScAZcpfhbsmHRdRaXaSTYjSh5DCGiM",
         },
      },
      schemas: { ...hotelSchemaDoc ,...blogSchemaDoc,...tourSchemaDoc}, 
   }, 
   security: [{ bearerAuth: [] }],
   paths: {
      ...authRouteDoc,
      ...userRouteDoc,
      ...searchRouteDoc,
      ...hotelRouteDoc,
      ...blogRouteDoc,
      ...locationRouteDoc,
      ...tourRouteDoc,
      ...restaurantRouteDoc,
   },
   // apis: ["../router/swaggerDoc.js"],
};
