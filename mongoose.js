const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FE-Star');

const Schema = mongoose.Schema;

const Star = mongoose.model('Star', new Schema({ name: String }));

Star.create({ name: '777777' }, function(err, star) {
  console.log({ err, star });

  Star.find({ name: '777777' }).exec(function(err, result) {
    console.log({ err, result });
  });
});
