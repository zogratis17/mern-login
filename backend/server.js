const express = require('express');
require('./db/connection.js')
const User= require('./Model/User.js')


const app = express();
app.use(express.json())

app.post('/user', async (req, res) => {
    try {
      console.log('Request body:', req.body);
      const userData = new User(req.body);
      const data = await userData.save();
      res.send({data,message:"Data Added to DB Successfully"});
      console.log('Data Added to DB Successfully');
    } catch (err) {
      res.status(400).send({ error: 'Error saving data', details: err.message });
      console.error('Error saving data:', err);
    }
});
  
const PORT  = 8000;

app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});
  