const Receipt = require('../models/receipt')
const sendEmail = require('../utils/sendEmail.js')



// create and send Receipt


const sendMail = async (req, res) => {
    try {
      const { email, text, mail, date, customer,sewing,alteration,price,advanced,medium, pickup } = req.body;
  
      // Check if the user already exists
      let user = await Receipt.findOne({ email: req.body.email });
    //   if (user) {
    //     return res.status(409).json({ message: "User with given email already exists" });
    //   }
  
      // Hash the password
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hashSync(password, salt);
  
      // Create a new user
      user = new Receipt({ email: req.body.email,date, text, customer,sewing,alteration,price,advanced,medium, pickup});
  
      // Save the user
      await user.save();
  
      // Generate a verification token
    //   const token = new Token({
    //     userId: user._id,
    //     token: crypto.randomBytes(16).toString("hex"),
    //   });
  
      // Save the token
    //   await token.save();
  
      // Send receipt email
      //const link = `http://localhost:5000/api/users/confirm/${token.token}`;
      await sendEmail( "henry.eyo2@gmail.com", user.email, "Payment Receipt",
      "Heres you receipt!",  user.date, user.customer, user.sewing,user.alteration,user.price, user.advanced,
      user.medium, user.pickup
      
      
      );
  
      // Respond to the client
      res.status(200).send({
        message: "Check your email to see your receipt.",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };




//GET Receipts
const getMails = async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const users = await Receipt.find(query.search?searchFilter:null)
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
}


//DELETE
const deleteMail = async (req,res)=>{
    try{
        await Receipt.findByIdAndDelete(req.params.id)
        // await Apartment.deleteMany({userId:req.params.id})
        // await Comment.deleteMany({userId:req.params.id})
        res.status(200).json("Mail has been deleted!")

    }
    catch(err){
        res.status(500).json({message:"Mail not deleted"})
    }
}


  module.exports = {sendMail, getMails, deleteMail }