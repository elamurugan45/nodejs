const { MongoClient } = require('mongodb');
const express = require('express');

const uri = "mongodb+srv://elamuruganraju4545:elamurugan4545@cluster0.mk7gad1.mongodb.net/merchant";
const client = new MongoClient(uri);
const port = 3000;
const app = express();

app.get('/data', (req, res) => {
  client.connect()
    .then(() => {
      console.log('Connected Successfully');
      const database = client.db("merchant");
      const product = database.collection("Product");
      const query = { name: "jayakanthan" };
      const options = {
        sort: { "category.BOOKS": -1 },
        projection: { _id: 0, name: 1, category: 1 },
      };
      return product.findOne(query, options);
    })
    .then(products => {
      console.log(products);
      res.json(products); 
    })
    .catch(error => {
      console.log('Failed to connect or retrieve data', error);
      res.status(500).send('Failed to connect or retrieve data');
    })
    .finally(() => {
      client.close(); 
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
