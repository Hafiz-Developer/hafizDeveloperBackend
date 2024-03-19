const contactModel = require("./schema")

exports.contactRegister = async (req , res) => {
    const  { fullName , contactNumber , email , projectType , projectBudget , projectDesc , googleMeet} = req.body
    try {
        const existingContact = await contactModel.findOne({ email });
        if (existingContact) {
            return res.status(400).json({
                success: false,
                msg: "A contact form with this email already exists. Please use a different email address."
            });
        }
        
        const data = await contactModel.create({
            fullName : fullName,
            contactNumber : contactNumber,
            email: email,
            projectType : projectType,
            projectBudget : projectBudget,
            projectDesc : projectDesc,
            googleMeet : googleMeet,
        })
        res.status(201).json({
            success : true,
            msg:"contact form created successfully",
            data
        })
    }
     catch (error) {
        res.status(500).json({
            success : false,
            msg:"contact  form couldn't  created ",
            error
        })
    }
}

exports.getAllContactForm = async (req, res) => {
    try {
        const contacts = await contactModel.find().sort({ createdAt: - 1 });
        res.status(200).json({
            success: true,
            msg: "All contact forms retrieved successfully",
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Failed to retrieve contact forms",
            error: error.message
        });
    }
};

exports.getSingleForm = async (req , res) =>{
    const data = await contactModel.findById(req.params.id)
    res.status(200).json({
        success: true,
        data
    })
}

exports.deleteForm = async (req , res) =>{
    const data = await contactModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        msg: `product id ${req.params.id} delete has been successfully`,
        data
    })
}