const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/example', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
