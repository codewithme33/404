const express = require('express');
const mongoose = require('mongoose');
const diseaseRoutes = require('./routes/disease.js');

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


mongoose.connect('mongodb+srv://codewithme33:rightnow@cluster0.kwn0r.mongodb.net/MediDiagnose?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));


app.use('/api/diseases', diseaseRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
