const express = require('express');
const bodyParser = require('body-parser');

const { provideErrorHandler } = require('./middlewares');
const path = require('path');

// routes
const fileUploadRoutes = require('./routes/file-upload');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(provideErrorHandler);

// Api Routes
app.use("/api/v1/file-upload", fileUploadRoutes);

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(buildPath, 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})
