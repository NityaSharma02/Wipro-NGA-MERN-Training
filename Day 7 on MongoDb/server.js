// Step 1: Connect to MongoDB Atlas
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://admin:Ashu%402002@eduprodb.0gv9y9n.mongodb.net/EduProDB";
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('EduProDB');
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB Atlas:", err);
  }
}
connectDB();

// Step 2: CRUD Operations

// CREATE
app.post('/courses', async (req, res) => {
  const result = await db.collection('courses').insertOne(req.body);
  res.json(result);
});

// READ
app.get('/courses', async (req, res) => {
  const courses = await db.collection('courses').find().toArray();
  res.json(courses);
});

// UPDATE
app.put('/courses/:id', async (req, res) => {
  const result = await db.collection('courses').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

// DELETE
app.delete('/courses/:id', async (req, res) => {
  const result = await db.collection('courses').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

// Step 5: Close connection (optional cleanup)
process.on('SIGINT', async () => {
  await client.close();
  console.log("🛑 Connection closed");
  process.exit(0);
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
