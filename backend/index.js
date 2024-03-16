const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: /(http:\/\/[a-z]+\..*)|(http:\/\/localhost:3000)/ }));
app.use("/locales", express.static("locales"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})