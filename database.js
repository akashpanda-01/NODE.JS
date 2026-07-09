const { MongoClient, ObjectId } = require("mongodb");

const url =
  "mongodb+srv://akash_db:zsA7KyhcGmyV54Q0@nodelearningdev.6wdrxxd.mongodb.net/";
const client = new MongoClient(url);

const dbName = "NamasteNode";

const data = {
  firstname: "A",
  lastname: "B",
  city: "Mumbai",
};

async function main() {
  await client.connect();
  console.log("Connected Successfully To Server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // const createIndex = await collection.createIndex({firstname: 1});
  // const insterData = await collection.insertMany([data]);
  // const removeData = await collection.deleteOne({
  //   _id: new ObjectId("6a4f257ddae8c5fe0b4c6311"),
  // });
  const findResult = await collection.find({}).toArray();
  console.log(findResult);

  return "Done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
