const { prisma } = require("../src/generated/prisma-client");

async function main() {
  await prisma.createUser({
    email: "alice3@prisma.io",
    name: "Alice",
    posts: {
      create: {
        title: "Join us for Prisma Day 2019 in Berlin",
        content: "https://www.prisma.io/day/",
        published: true
      }
    }
  });
  await prisma.createUser({
    email: "bob3@prisma.io",
    name: "Bob",
    posts: {
      create: [
        {
          title: "Subscribe to GraphQL Weekly for community news",
          content: "https://graphqlweekly.com/",
          published: true
        },
        {
          title: "Follow Prisma on Twitter",
          content: "https://twitter.com/prisma"
        }
      ]
    }
  });
  await prisma.createProduct({
    label: "Apple Watch Series 5",
    price: 479000,
    description: "Nike Edition!",
    owner: {
      create: {
        email: "Test@test.com",
        name: "Test"
      }
    }
  });
}

main().catch(e => console.error(e));
