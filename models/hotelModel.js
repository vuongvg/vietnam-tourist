const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        hotelname: { 
        type:String, 
        required:[true, "Name must be provided"],
        trim:true,
        maxlength:[50, "Name can not be more than 50 characters"]
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
            maxlength: [11, "The max length of phone number is only 11"],
            minLength: [10, "The min length of phone number is only 10"],
            unique: true,
            // match: [
            //     /(((\+|)84)|0)(3|5|7|8|9|2)+([0-9]{8|9})\b/,
            //     "Please enter valid phone number",
            // ]
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
    }, 
    { collection:'hotels', timestamps: true, versionKey: false }
);

hotelSchema.statics.getAllHotels = function() {
    return this.find({});
}

hotelSchema.statics.updateHotelInfor = function(hotelId,updateInfor) {
    return this.findByIdAndUpdate(hotelId, updateInfor, {new:true});
}

hotelSchema.statics.deleteHotelInfor = function(hotelId) {
    return this.deleteOne({ hotelId });
}

const HotelModel = mongoose.model('hotelModel',hotelSchema);

module.exports = HotelModel;
