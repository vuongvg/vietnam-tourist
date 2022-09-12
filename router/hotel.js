const BaseRouter = require("./BaseRouter");
const { createBasePost, updateBasePost, findAllBasePost, deleteBasePost, findSingleBasePost, findFamousHotels } = require("../controllers/hotelCtrl");

class HotelRouter extends BaseRouter {
    constructor({createBasePost, updateBasePost, findAllBasePost, deleteBasePost, findSingleBasePost, findFamousHotels}) {
        super(createBasePost, updateBasePost, findAllBasePost, deleteBasePost, findSingleBasePost);
        this._findFamousHotels = findFamousHotels;

        this.get("/famous", async (req, res) => {
            res.send("famous")
            // const result = await this._findFamousHotels(req.query.page, req.query.limit);
            // res.status(200).json(result);
        });
    }
}
const router = new HotelRouter({createBasePost, updateBasePost, findAllBasePost, deleteBasePost, findSingleBasePost, findFamousHotels});

module.exports = router;