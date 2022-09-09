const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema({
    hotelname: { 
      type:String, 
      required:[true, "Name must be provided"],
      trim:true,
      maxlength:[20, "Name can not be  more than 20 characters"]
    },
    email: { 
        type:String, 
        unique:true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    phone: { 
        type:String,
        required: [true, "Contact information must be provided"],
        match:[
            /((09|03|07|08|05)+([0-9]{8})\b)/,
            "Please enter valid phone number",
        ]
    },
    city: {
        type:String,
        required: [true, "City must be provided"]
    },
    fullLocation: {
        type: String,
        required: [true, "Location must be provided"]
    },
    gmaplink: {
        type: String, 
    },
    avatar: {
        type:String,
    },
    album:{
        type: Array
    },
    description: {
        type:String,
        required:[true, "Description must be provided"]
    },
    evaluate: {
        type:Number,
    }
}, { collection:'hotels' });

hotelSchema.statics.getAllHotels = function() {
    return this.find({});
}

const HotelModel = mongoose.model('hotelModel',hotelSchema);

module.exports = HotelModel;
