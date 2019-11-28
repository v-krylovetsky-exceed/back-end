var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  text: { type: String, required: true, max: 100 },
  checked: { type: Boolean, required: true },
});
// Export the model
module.exports = mongoose.model('Product', ProductSchema);