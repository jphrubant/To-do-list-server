const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    solved: { type: Boolean, default: false},
    createdTimestamp: {type: String},
    solvedTimestamp: {type: String},
    user: [{type: Schema.Types.ObjectId, ref:'User'}]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;