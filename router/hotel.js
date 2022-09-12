const BaseRouter = require("./BaseRouter");
const hotel= require("../controllers/hotelCtrl");

class HotelRouter extends BaseRouter {
    constructor(hotel) {
        super(hotel);
        this._findFamousHotels = hotel.findFamousHotels;

        this.get("/famous", async (req, res) => {
            res.send("2")
            // const result = await this._findFamousHotels(req.query.page, req.query.limit);
            // res.status(200).json(result);
        });
    }
}
const router = new HotelRouter(hotel);

module.exports = router; 