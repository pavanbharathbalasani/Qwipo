const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', customerRoutes);
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
