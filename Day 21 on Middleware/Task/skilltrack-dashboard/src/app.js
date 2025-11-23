const express = require('express');
const morgan = require('morgan');
const bodyParser = require('express').json;
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes/index');

const app = express();

// Middleware setup
app.use(requestLogger);
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Routes setup
app.use('/', routes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});