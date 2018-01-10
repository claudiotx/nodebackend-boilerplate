import * as mongoose from 'mongoose'
import updatedOnPlugin from './plugins/updatedOn';
import valueIndicatorPlugin from './plugins/valueIndicator';

const options = {
    strict: false
};

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    estvalue: Number
},options)

// Attach plugin
itemSchema.plugin(updatedOnPlugin);
itemSchema.plugin(valueIndicatorPlugin);

const Item = mongoose.model('Item', itemSchema)

// Custom Inline Validators
Item.schema.path('estvalue').validate((value) => {
    return value > 0;
}, 'Estimated value must be greather than 0');

export { Item };
