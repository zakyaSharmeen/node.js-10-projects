const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require('body-parser');

const UserModel = require("./models/Users")

const app = express()
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




mongoose.connect('mongodb://127.0.0.1:27017/crud-fd-bd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));


app.post('/createUser', async (req, res) => {
    const data = new UserModel(req.body);
    await data.save();
    res.status(201).json({data, message: 'Data saved!' });
  });

  app.get('/createUser', async (req, res) => {
    const data = await UserModel.find();
    res.json(data);
  });




app.delete('/deleteUser/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' }); // User doesn't exist
      }
  
      const updatedUsers = await UserModel.find();
      res.json(updatedUsers);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle server errors
    }
  });
  
  




//   for update
  app.get('/getUser/:id', async (req, res) => {
    const id = req.params.id
    const data = await UserModel.findById({_id:id})
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
  });
  
  app.put('/updateUser/:id', async (req, res) => {
    const id = req.params.id
    const data = await UserModel.findByIdAndUpdate({_id:id},
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    )
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
  });






app.listen(5000,()=>{
    console.log("server is started at 5000");
    
})

