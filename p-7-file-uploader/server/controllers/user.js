const userModel = require("../models/user");

const userController = {
  createUser: async (req, res) => {
    // res.send("User created");
    const { name, email, age } = req.body;
    const { filename } = req.file;

    try {
      if (name && email && age && filename) {
        const newUser = new userModel({
          name,
          email,
          age,
          profile: filename,
        });

        const new_user = await newUser.save();
        if (new_user) {
          return res.status(200).json(newUser);
        
      }else{
        return res.status(400).json({ mssg: "something wrong" });

      }
    } else {
        return res.status(400).json({ mssg: "all field are required" });
      }
    } catch (err) {
      return res.status(400).json({ mssg: "all fileds are required" });
    }
  },
  getAllUser: async (req, res) => {
    // res.send("All users retrieved");
    try{
        const allUsers = await userModel.find({})
        if(allUsers){
            return res.status(200).json(allUsers)
        }
    }catch(err){
        return res.status(400).json(err)
    }
  }
};

module.exports = userController;
