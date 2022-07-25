const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://mccannethan335:<Raptor123!>@cluster0.guscq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


module.exports = MongoClient.connection;