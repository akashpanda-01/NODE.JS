const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://akash_db:zsA7KyhcGmyV54Q0@nodelearningdev.6wdrxxd.mongodb.net/";

const client = new MongoClient(url);

const dbName = "NamasteNode";

const data = {
  firstname: "A",
  lastname: "B",
  city: "c",
};

async function main() {
  await client.connect();
  console.log("Connected");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // CURD
  // const create = await collection.insertOne(data);
  // console.log(create);

  const update = await collection.updateMany(
    { city: "c" },
    { $set: { city: "d" } },
  );

  // If multiple same document in database and we want to update specific one, so we
  //have to find all the same documents and which one we want to change we have to use that
  //specific ones id and update it like below code
  // const data1 = await collection
  //   .find({ firstname: "A", lastname: "B", city: "c" })
  //   .toArray();
  // const change = await collection.updateOne(
  //   { _id: data1[1]._id },
  //   { $set: { city: "d" } },
  // );


  // const remove = await collection.deleteOne({
  //   firstname: "A",
  // });

  const find = await collection.find({}).toArray();
  console.log(find);
  // console.log(remove);

  return "Done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
