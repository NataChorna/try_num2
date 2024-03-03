// const dbConnection = "mongodb+srv://vverych:28072005@cluster0.h8qreby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// module.exports = dbConnection;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vverych:28072005@cluster0.h8qreby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged deplyment");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

module.exports = {
  uri: process.env.MONGODB_URI,
};
