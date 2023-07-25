import express from "express";
import mongoose from "mongoose";
import { Account } from "./models";
/*import bodyParser from "body-parser";
 import {MongoClient} from 'mongodb' 
 app.use( bodyParser.json() );*/
// const mongoose = require('mongoose')

/* let accountInfo = [ {
        id: '1',
        name: 'David Webb',
        upvotes: 0,
        comments: [],
    }, {
        id: '2',
        name:'Jason Bourne',
        upvotes: 0,
        comments: [],
    },  {
        id: '3',
        name: 'Denzel Washington',
        upvotes: 0,
        comments: [],
    },{
        id: '4',
        name: 'Jackie Chan',
        upvotes: 0,
        comments: [],
    }
];
 */


const app = express();

app.use(express.json());

 const uri  = 'mongodb+srv://gaze-backend-db:cEa4WigYJ6lNDokr@gaze-backend.vb07ii6.mongodb.net/gaze-backend-db?retryWrites=true&w=majority'
// remove angle brackets around password to prevent bad auth error
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } )
//code to connect Express server to Mongodb
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


// endpoint to view each account
app.get('/api/accountsList/:id' , async (req, res) => {
    const { id } = req.params;

    const userAccount = await Account.findOne({id})
    if (userAccount) {
        res.json(userAccount); 
    }
    else {
        res.sendStatus(404)
    }
    
})

// upvote endpoint
app.put("/api/accountsList/:id/upvote", async (req, res) => {
    const { id } = req.params;
    const userAccount = await Account.findOneAndUpdate({ id }, { $inc: { upvotes: 1 },})
    if (userAccount) {
        res.json(userAccount )
    }else {
        res.send('This account does not exist')
    }
});



//comments endpoint
app.post("/api/accountsList/:id/comments", async (req, res) => {
    const { id } = req.params;
    const { postedBy , text} = req.body;
    const userAccount = await Account.findOneAndUpdate({ id }, { $push: { comments: { postedBy, text }}});
    if (userAccount){
        res.json(userAccount);
    }else {
        res.send('This account does not exist');
    }

});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
