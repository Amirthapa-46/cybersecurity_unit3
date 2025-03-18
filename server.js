const app = require("./express"); 

const PORT = process.env.PORT || 10000; 

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
