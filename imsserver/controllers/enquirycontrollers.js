const getEnquiries = (req,res)=>{
    console.log("enquiries are here")
    res.end("ye lo data enquiry")
}

const postEnquiries = (req,res)=>{
    console.log("postEnquiries are here")
    res.end("ye lo response mil gaya data ")
}

module.exports ={
    getEnquiries,
    postEnquiries
}