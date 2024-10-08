import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import { case2Model } from '../models/case2';  // Import your Mongoose model
// import { case2 } from '../data/case2'; 
import { case3Model } from '../models/case3';
// import { case3 } from '../data/case3';
import bodyParser from 'body-parser';
const axios = require('axios');
import {data43Model} from '../models/data43';
// import {data43} from '../data/data43';
import { data53Model } from '../models/data53';
// import { data53 } from '../data/data53';
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: '*',  // Allows all origins, adjust this to be more restrictive if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Log incoming requests
app.use((req: Request, res: Response, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Define routes
app.get('/api/options/case1/:category', async (req: Request, res: Response) => {
    try {
      const category = req.params.category;
      const case2Data = await case2Model.findOne({ Category: category });
      res.json(case2Data?.options || []);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/api/options/case2/:article', async (req: Request, res: Response) => {
    const article = req.params.article;
    try {
        const case3Data = await case3Model.findOne({ Category: article });

        if (!case3Data) {
            return res.status(404).json({ message: 'Data not found in case3' });
        }

        return res.status(200).json(case3Data);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch data from case3' });
    }
});

app.get('/api/options/data43/:article', async (req: Request, res: Response) => {
  const article = req.params.article;
  try {
      const data43data = await data43Model.findOne({ Category: article });

      if (!data43data) {
          return res.status(404).json({ message: 'Data not found in case3' });
      }

      return res.status(200).json(data43data);
  } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch data from case3' });
  }
});
app.get('/api/options/data53/:article', async (req: Request, res: Response) => {
  const article = req.params.article;
  try {
      const data53data = await data53Model.findOne({ Category: article });

      if (!data53data) {
          return res.status(404).json({ message: 'Data not found in case3' });
      }

      return res.status(200).json(data53data);
  } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch data from case3' });
  }
});

// ----------------------------------------------

// const VERIFY_TOKEN = "youaregay";

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {
  
  // Your verify token. Should be a string you set.
  let VERIFY_TOKEN = "youaregay";
  
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
      
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// ----------------------------------------------

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI as string)
  .then(async () => {
    try {
      // Uncomment the following lines if you want to drop the database and insert data
      // await mongoose.connection.db.dropDatabase();  
      // await case2Model.insertMany(case2);  
      // await case3Model.insertMany(case3);  
      // await data43Model.insertMany(data43);
      // await data53Model.insertMany(data53);
      // console.log("Data inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
    }

    // Start the server
    app.listen(7000, () => console.log(`Server Port: 7000`));
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });
