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






































// const { MongoClient } = require('mongodb');
// const express = require('express');
// const uri = "mongodb+srv://elamuruganraju4545:elamurugan4545@cluster0.mk7gad1.mongodb.net/merchant";
// const client = new MongoClient(uri);
// const port = 3000;
// const app = express();


// client.connect()
// .then(() => console.log('Connected Successfully'))
// .catch(error => console.log('Failed to connect', error))
// async function run() {
//   try {
//     const database = client.db("merchant");
//     const product = database.collection("Product");
//     const query = { name: "jayakanthan" };
//     const options = {
//       sort: { "category.BOOKS": -1 },
      
//       projection: { _id: 0, name: 1, category: 1 },
//     };
//     const products = await product.findOne(query, options);
//     console.log(products);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//      console.log(`Server is listening on port ${port}`);
//    });



















// 

// const ProductSchema = new

// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 3000;

// const url = "mongodb+srv://elamuruganraju4545:elamurugan4545@cluster0.mk7gad1.mongodb.net";
// const dbName = 'merchant';
// const collectionName= 'Product'

// client.connect()
// .then(() => console.log('Connected Successfully'))
// .catch(error => console.log('Failed to connect', error))

// app.get('/data', (req, res) => {
//   MongoClient.connect(url, (err, client) => {
//     if (err) {
//       console.error('Failed to connect to the database:', err);
//       res.status(500).send('Failed to connect to the database');
//       return;
//     }

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Find documents in the collection
//     collection.find({}).toArray((err, documents) => {
//       if (err) {
//         console.error('Error retrieving data:', err);
//         res.status(500).send('Error retrieving data');
//         return;
//       }

//       res.json(documents); // Send the retrieved data as JSON response
//       client.close(); // Close the database connection
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
