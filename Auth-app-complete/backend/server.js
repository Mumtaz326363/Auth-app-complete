```js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
const app = express();


app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://127.0.0.1:5500' }));


// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 4000;


mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('MongoDB connection error:', err));
```