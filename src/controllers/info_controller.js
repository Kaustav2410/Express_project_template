const {StatusCodes}= require('http-status-codes');
exports.info = (req,res)=>{
    return res.status(StatusCodes.ACCEPTED).json({
        success:'true',
        message:'The API is live',
        error:{},
        data:{},
    })
}