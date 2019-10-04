const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('./generated/prisma-client');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        feed: (parent, args, context) => {
            return context.prisma.posts({where: {published: true}})
        },
        filterPosts: (parent, {searchString}, context) => {
            return context.prisma.posts({
                where: {
                    OR: [
                        {
                            title_contains: searchString,
                        },
                        {
                            content_contains: searchString,
                        },
                    ],
                },
            })
        },
        post: (parent, {id}, context) => {
            return context.prisma.post({id})
        },
        getAllProduct: (parent, args, context) => {
            return context.prisma.products();
        },
        getByIdProduct: (parent, {id}, context) => {
            return context.prisma.product({id: id});
        }
    },
    Mutation: {
        signupUser: (parent, {email, name}, context) => {
            return context.prisma.createUser({
                email,
                name,
            })
        },
        createDraft: (parent, {title, content, authorEmail}, context) => {
            return context.prisma.createPost({
                title,
                content,
                author: {connect: {email: authorEmail}},
            })
        },
        publish: (parent, {id}, context) => {
            return context.prisma.updatePost({
                where: {id},
                data: {published: true},
            })
        },
        deletePost: (parent, {id}, context) => {
            return context.prisma.deletePost({id})
        },
        deleteProduct: (parent, {id}, context) => {
            return context.prisma.deleteProduct({id})
        },
        addProduct: (parent, {name, createdAt, updatedAt, price, description, quantity, image, published, category}, context) => {
            return prisma.createProduct({
                name,
                createdAt,
                updatedAt,
                price,
                description,
                quantity,
                image,
                published,
                category
            })
        },
        updateProduct: (parent, {id, name, createdAt, updatedAt, price, description, quantity, image, published, category}, context) => {
            return prisma.updateProduct({
                data: {
                    name,
                    createdAt,
                    updatedAt,
                    price,
                    description,
                    quantity,
                    image,
                    published,
                    category
                }, where: {
                    id: id
                }
            })
        },
        createCheckoutSession: (parent, args, context) => {
            return stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [{
                    name: 'T-shirt',
                    description: 'Comfortable cotton t-shirt',
                    images: ['https://example.com/t-shirt.png'],
                    amount: 500,
                    currency: 'usd',
                    quantity: 1,
                }],
                success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
                cancel_url: "http://localhost:3000/cancel",
            });
        },
    },
    Post: {
        author: ({id}, args, context) => {
            return context.prisma.post({id}).author()
        },
    },
    User: {
        posts: ({id}, args, context) => {
            return context.prisma.user({id}).posts()
        },
    }
};

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: {
        prisma,
    },
});

server.start(() => console.log('Server is running on http://localhost:4000'))
