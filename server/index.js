require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/children');
app.use('/api/posts', posts);

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
}

app.get(/.*/, (req, res) => res.sendFile(__dirname + 'public/index.html'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
