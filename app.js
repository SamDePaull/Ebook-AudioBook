require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const app = express();
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const dummyRoutes = require('./routes/dummyRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', dummyRoutes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).json({ error: err.message });
});

// Sync database
db.sequelize.sync({ force: false }) // force: false untuk menghindari overwrite data
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

module.exports = app;
