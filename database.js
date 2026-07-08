const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://akash_db:zsA7KyhcGmyV54Q0@nodelearningdev.6wdrxxd.mongodb.net/";
  const client = new MongoClient(url);

const dbName = "NamasteNode";

const data = {
  "firstname" : "A",
  "lastname": "B",
  "city": "Mumbai"
};

async function main() {
  await client.connect();
  console.log("Connected Successfully To Server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // const insterData = await collection.insertMany([data]);
  const findResult = await collection.find({}).toArray();
  const removeData = await collection.deleteOne({_id : '6a4e6b5bdae1d77ebcb20bda'})
  console.log(findResult);
  // console.log(insterData);
  

  return "Done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
