const { GraphQLObjectType, GraphQLString } = require("graphql");

const AutherType = new GraphQLObjectType({
    name: 'auther',
    fields: {
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        _id: {type: GraphQLString},
    },
});

const CategoryType = new GraphQLObjectType({
    name: 'category',
    fields: {
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
    },
});


module.exports = {
    AutherType,
    CategoryType,
};