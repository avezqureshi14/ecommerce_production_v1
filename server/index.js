const app = require("./app");
const connectDatabase = require("./database/db");
const PORT = 8000;
connectDatabase();
app.listen(PORT, () => {
  console.log(`Server is starting on PORT ${PORT}`);
});
