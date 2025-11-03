const { MongoClient } = require("mongodb");

const uri = ""; // my Atlas URI
const client = new MongoClient(uri);

const dbName = "GreenPulse";
const collectionName = "energy_readings";

async function createIndexes() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 1️. Create index on timestamp
    const index1 = await collection.createIndex({ timestamp: 1 });
    console.log("🔹 Index created on timestamp:", index1);

    // 2️. Create compound index on meterId + timestamp
    const index2 = await collection.createIndex({ meterId: 1, timestamp: 1 });
    console.log("🔹 Compound index created:", index2);

    // 3️. List all indexes
    const indexes = await collection.indexes();
    console.log("\n📜 Current Indexes:");
    console.log(indexes);

  } catch (err) {
    console.error("❌ Error creating indexes:", err);
  } finally {
    await client.close();
  }
}

createIndexes();
