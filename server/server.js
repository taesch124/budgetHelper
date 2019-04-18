const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const budgetRouter = require('./routes/budgetRouter');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/retirementBudgeter";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/budget', budgetRouter);

//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'build')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
  } else {
      app.use(express.static(path.resolve(__dirname, '..', 'public')));
      
      app.get('*', function (request, response){
          response.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
      });
  }
  
  app.listen(PORT, () => {
      console.log('Server listening on: http://localhost:' + PORT);
  });