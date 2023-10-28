import mongoose from 'mongoose';
import { Sequelize, DataTypes } from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets-db', {
    useNewUrlParser: true,
});

// const storeSchema = new mongoose.Schema(
//     { name: { type: String } },
//     { _id: false, id: false, versionKey: false }
// );

const widgetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    inventory: {
        type: Number,
    },
    soldout: {
        type: String,
    },
    stores: {
        type: [{ name: String }],
    },
});

// widgetSchema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         delete ret._id;
//     },
// });

const Widgets = mongoose.model('widgets', widgetSchema);

// Start: SQL Code
const sequelize = new Sequelize('sqlite::memory');
const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING,
});

Categories.sync({ force: true }).then(() => {
    _.times(5, (i) => {
        Categories.create({
            category: casual.word,
            description: casual.sentence,
        });
    });
});
// End: SQL Code

export { Widgets, Categories };
