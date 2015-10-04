//exercise 4 new file Posts.js

var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    link: String,
    upvotes: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb){
    this.upvotes += 1;
    this.save(cb);
    
};

mongoose.model('Post', PostSchema);