const { MongoClient } = require("mongodb");

// connection
const uri = ""; // replace this or  Atlas URI

// Database and collection
const client = new MongoClient(uri);
const dbName = "GreenPulse";
const collectionName = "energy_readings";

async function getMeterReadings() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // readings for MTR001
    const readings = await collection.find({ meterId: "MTR001" }).toArray();

    console.log("🔹 Meter Readings for MTR001:");
    console.log(readings);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

getMeterReadings();
