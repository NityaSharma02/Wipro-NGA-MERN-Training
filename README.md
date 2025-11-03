## ⚡ Smart Energy Monitoring – Time Series & Aggregations  

### 🎯 Objective  
To design and analyze a time-series database in **MongoDB Compass GUI** that captures real-time energy consumption readings from smart meters across multiple locations.  
This exercise focuses on **time-based data modeling**, **aggregations**, **filtering by time**, and **performance optimization using indexes**.

---

### 🏙️ Scenario Background  
You are developing a dashboard for a smart energy company — **GreenPulse Energy** — that monitors electricity usage from IoT meters installed in various buildings.  
Each smart meter records readings every minute, including:

- `timestamp`  
- `energy_kWh`  
- `temperature_C`  
- `location`  
- `meterId`

---

## ⚙️ Steps to Create Time-Series Collection (Using MongoDB Compass GUI)

1. Open **MongoDB Compass** and connect to your cluster.  
2. Select your database or create a new one (e.g., `energyDB`).  
3. Click **“Create Collection” → “Time-Series Collection”**.  
4. Fill the details:
   - **Collection Name:** `energy_readings`  
   - **Time Field:** `timestamp`  
   - **Meta Field:** `meterId`  
   - **Granularity:** `minutes`
5. Click **Create Collection ✅**  
6. Go to the **Documents** tab → **Insert Document** → Paste sample data below.

---

### 📥 Sample Data
```json
[
  { "meterId": "MTR001", "location": "Delhi-Office", "timestamp": ISODate("2025-10-29T10:00:00Z"), "energy_kWh": 3.5, "temperature_C": 27 },
  { "meterId": "MTR001", "location": "Delhi-Office", "timestamp": ISODate("2025-10-29T11:00:00Z"), "energy_kWh": 3.8, "temperature_C": 28 },
  { "meterId": "MTR001", "location": "Delhi-Office", "timestamp": ISODate("2025-10-29T12:00:00Z"), "energy_kWh": 4.2, "temperature_C": 30 },
  { "meterId": "MTR002", "location": "Mumbai-Plant", "timestamp": ISODate("2025-10-29T10:00:00Z"), "energy_kWh": 5.5, "temperature_C": 32 },
  { "meterId": "MTR002", "location": "Mumbai-Plant", "timestamp": ISODate("2025-10-29T11:00:00Z"), "energy_kWh": 6.2, "temperature_C": 33 },
  { "meterId": "MTR002", "location": "Mumbai-Plant", "timestamp": ISODate("2025-10-29T12:00:00Z"), "energy_kWh": 5.9, "temperature_C": 31 }
]
```
# 🧩 Queries and Aggregations (Using GUI Aggregation Tab)

## 1️⃣ Retrieving all readings for a specific meter  
**Example:** `MTR001`  

✅ **Done in Filter Bar:**
```json
{ "meterId": "MTR001" }
```

---

## 2️⃣ Find the readings between two timestamps  
⏳ **  

---

## 3️⃣ Finding total energy consumption per meter  
Use **$group** stage in Aggregation tab:  
```json
{
  "_id": "$meterId",
  "totalEnergy": { "$sum": "$energy_kWh" }
}
```

---

## 4️⃣ Average temperature by location  
Use **$group** stage:  
```json
{
  "_id": "$location",
  "avg_temperature": { "$avg": "$temperature_C" }
}
```

---

## 5️⃣ Hourly energy consumption trend  
⏳ **  

---

## 6️⃣ Comparing average energy usage across meters  
Use **$group** stage:  
```json
{
  "_id": "$meterId",
  "avg_Energy": { "$avg": "$energy_kWh" }
}
```

---

## 7️⃣ Detecting high usage Hours (>6kWh)  
Use **$match** stage:  
```json
{
  "energy_kWh": { "$gt": 6 }
}
```

---

## 8️⃣ Indexing and Query Optimization  
Performed through **MongoDB Compass GUI**  

### Steps:  
1. Go to your collection → **Indexes tab** → **Create Index**  
2. Create:  

   **Index on timestamp →**  
   ```json
   { "timestamp": 1 }
   ```

   **Compound Index →**  
   ```json
   { "meterId": 1, "timestamp": 1 }
   ```

📈 These indexes improve query performance for **time-based filters**.  

```
