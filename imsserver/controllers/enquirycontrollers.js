const EnquirySchema = require('../modal/modal')



const getEnquiries = (req,res)=>{
    console.log("enquiries are here")
    res.end("ye lo data enquiry")
}

const postEnquiries = async (req,res)=>{
    console.log(req.body)
    const enquiry = await EnquirySchema.create(req.body)
    res.status(201).json({enquiry})
}

module.exports ={
    getEnquiries,
    postEnquiries
}