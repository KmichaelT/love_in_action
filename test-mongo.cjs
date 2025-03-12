const { MongoClient } = require('mongodb');

// Replace this with your actual connection string
const uri = "mongodb+srv://kmichaeltb:LiaDataBasePa55@cluster0.nzexk.mongodb.net/love_in_action_site?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db("love_in_action_site");
    console.log("Database accessed successfully");
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    await client.close();
  }
}

run();