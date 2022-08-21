
exports.asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
        try {
            await  fn(req,res,next)
        } catch (error) {
            return next
        }
    }
}