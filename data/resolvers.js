import { Widgets } from './dbConnectors';

const resolvers = {
    getProduct: ({ id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const widget = await Widgets.findById({ _id: id });
                resolve(widget);
            } catch (err) {
                reject(err);
            }
        });
    },
    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const widgets = await Widgets.find({});

                console.log(widgets);

                resolve(widgets);
            } catch (err) {
                reject(err);
            }
        });
    },
    createProduct: ({ input }) => {
        const widget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });

        return new Promise(async (resolve, reject) => {
            try {
                const savedWidget = await widget.save();

                resolve(widget);
            } catch (err) {
                reject(err);
            }
        });
    },
    updateProduct: ({ input }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const widget = await Widgets.findOneAndUpdate(
                    { _id: input.id },
                    input,
                    { new: true }
                );

                resolve(widget);
            } catch (err) {
                reject(err);
            }
        });
    },
    deleteProduct: ({ id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                await Widgets.deleteOne({ _id: id });
                resolve('Successfully deleted widget');
            } catch (err) {
                reject(err);
            }
        });
    },
};

export default resolvers;
