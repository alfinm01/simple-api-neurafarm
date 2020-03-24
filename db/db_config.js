const MongoClient = require('mongodb').MongoClient

// process.env.DATABASE_URI
const uri = 'mongodb+srv://alfinm01:root@cluster0-y7sby.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(uri, { useNewUrlParser: true })

/* client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

module.exports = client
