require("dotenv").config();
const prisma = require("./db/prisma");


const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
  }
}

testConnection();