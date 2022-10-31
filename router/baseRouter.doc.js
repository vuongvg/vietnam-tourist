class PostRouteDoc {
   constructor({ tag, newPost, post, idTest }) {
      this.tag = tag;
      this.newPost = newPost;
      this.post = post;
      this.idTest = idTest;

      this.listPost = {
         tags: [this.tag],
         description: `List all of the ${this.tag}s`,
         parameters: [
            { in: "query", name: "page", schema: { type: "integer", default: "" }, description: `The number of page to return.  Example: 1` },
            { in: "query", name: "limit", schema: { type: "integer", default: "" }, description: `The numbers of items to return.  Example: 5` },
            // { in: "query", name: "filter", schema: { type: "string", default: "" }, description: `Filter items.  Example: {"famous":true}` },
            // { in: "query", name: "range", schema: { type: "string", default: "" }, description: `Range items.  Example: ["evaluate",4, 5]` },
            // { in: "query", name: "sort", schema: { type: "string", default: "" }, description: `Sort items.  Example: {"title":"-1"}` },
            // { in: "query", name: "search", schema: { type: "string", default: "" }, description: `Search items.  Example: ["title","ha_noi"]` },
         ],
         responses: {
            200: {
               description: "OK",
               content: {
                  "application/json": {
                     schema: {
                        type: "array",
                        example: [this.post],
                     },
                  },
               },
            },
         },
      };

      this.getPostById = {
         tags: [this.tag],
         description: `Get ${this.tag} by Id`,
         parameters: [
            { in: "path", name: "id", schema: { type: "string", example: idTest }, description: `Numeric ID of the ${this.tag} to retrieve` },
         ],
         responses: {
            200: {
               description: "OK",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        example: this.post,
                     },
                  },
               },
            },
         },
      };

      this.createPost = {
         tags: [this.tag],
         description: `Create a new ${this.tag}`,
         requestBody: {
            require: true,
            description: `Create a new ${this.tag}`,
            content: {
               "application/json": {
                  schema: {
                     type: "object",
                     example: this.newPost,
                  },
               },
            },
         },

         responses: {
            200: {
               description: "OK",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        example: post,
                     },
                  },
               },
            },
         },
      };

      this.updatePostById = {
         tags: [this.tag],
         description: `Update a ${this.tag}`,
         parameters: [
            { in: "path", name: "id", schema: { type: "string", example: idTest }, description: `Numeric ID of the ${this.tag} to retrieve` },
         ],
         requestBody: {
            require: true,
            description: `Update a ${this.tag}`,
            content: {
               "application/json": {
                  schema: {
                     type: "object",
                     example: this.newPost,
                  },
               },
            },
         },

         responses: {
            201: {
               description: "OK",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        example: {
                           matchedCount: 1,
                           modifiedCount: 1,
                           id: this.idTest,
                        },
                     },
                  },
               },
            },
         },
      };

      this.deletePostById = {
         tags: [this.tag],
         description: `Get ${this.tag} by Id`,
         parameters: [{ in: "path", name: "id", schema: { type: "string" }, description: `Numeric ID of the ${this.tag} to retrieve` }],
         responses: {
            200: {
               description: "OK",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        example: {
                           acknowledged: true,
                           deletedCount: 1,
                           id: this.idTest,
                        },
                     },
                  },
               },
            },
         },
      };
   }
}

module.exports = PostRouteDoc;
