const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    feed: (parent, args, context) => {
      return context.prisma.posts({ where: { published: true } });
    },
    filterPosts: (parent, { searchString }, context) => {
      return context.prisma.posts({
        where: {
          OR: [
            {
              title_contains: searchString
            },
            {
              content_contains: searchString
            }
          ]
        }
      });
    },
    post: (parent, { id }, context) => {
      return context.prisma.post({ id });
    },
    products: (parent, {}, context) => {
      const res = context.prisma.products();
      return res;
    },
    product: (parent, { id }, context) => {
      const res = context.prisma.product({ id });
      return res;
    }
  },
  Mutation: {
    signupUser: (parent, { email, name }, context) => {
      return context.prisma.createUser({
        email,
        name
      });
    },
    createDraft: (parent, { title, content, authorEmail }, context) => {
      return context.prisma.createPost({
        title,
        content,
        author: { connect: { email: authorEmail } }
      });
    },
    publish: (parent, { id }, context) => {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true }
      });
    },
    deletePost: (parent, { id }, context) => {
      return context.prisma.deletePost({ id });
    },
    updatePost: (parent, { id, title }, context) => {
      return context.prisma.updatePost({ where: { id }, data: { title } });
    },
    updateProduct: (
      parent,
      { id, label, price, description, published },
      context
    ) => {
      return context.prisma.updateProduct({
        where: { id },
        data: { label, price, description, published }
      });
    },
    deleteProduct: (parent, { id }, context) => {
      return context.prisma.deleteProduct({ id });
    },
    createProduct: (
      parent,
      { label, price, description, ownerEmail, published },
      context
    ) => {
      return context.prisma.createProduct({
        label,
        price,
        description,
        published,
        owner: { connect: { email: ownerEmail } }
      });
    }
  },
  Post: {
    author: ({ id }, args, context) => {
      return context.prisma.post({ id }).author();
    }
  },
  User: {
    posts: ({ id }, args, context) => {
      return context.prisma.user({ id }).posts();
    }
  },
  Product: {
    owner: ({ id }, args, context) => {
      return context.prisma.product({ id }).owner();
    },
    labelAndPrice: ({ label, price }, args, context) => {
      return `${label} - ${price}cts`;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
