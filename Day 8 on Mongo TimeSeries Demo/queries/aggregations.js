const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // my connection string
const client = new MongoClient(uri);

const dbName = "GreenPulse";
const collectionName = "energy_readings";

async function runAggregations() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 3. Total energy consumption per meter
    const totalEnergy = await collection
      .aggregate([
        { $group: { _id: "$meterId", totalEnergy: { $sum: "$energy_kWh" } } }
      ])
      .toArray();

    console.log("🔹 Total Energy Consumption per Meter:");
    console.log(totalEnergy);

    // 4️. Average temperature by location
    const avgTemp = await collection
      .aggregate([
        { $group: { _id: "$location", avgTemp: { $avg: "$temperature_C" } } }
      ])
      .toArray();

    console.log("\n🔹 Average Temperature by Location:");
    console.log(avgTemp);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

runAggregations();
