const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the Database");
    }
    const db = client.db(databaseName);

    // db.collection("users").findOne({ name: "Jen" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(user);
    // });

    db.collection("users")
      .deleteOne({
        _id: new ObjectID("5dee600f5b42e42ef057be4b")
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log("Unable to delete " + error);
      });
  }
);
