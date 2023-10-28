import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        inventory: Int
        soldout: Soldout
        stores: [Store]!
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Store {
        name: String
    }

    input StoreInput {
        name: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        inventory: Int
        soldout: Soldout
        stores: [StoreInput]!
    }

    type Query {
        getProduct(id: ID): Product
        getAllProducts: [Product]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(id: ID!): String
    }`);

export default schema;
