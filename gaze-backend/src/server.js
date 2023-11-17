import fs from "fs";
import admin from "firebase-admin";
import express from "express";
import mongoose from "mongoose";
import { Account } from "./models/index.js";
import * as url from "url";
import * as path from "path";

function isEmpty(obj) {
    return Object.keys(obj || {}).length === 0;
}

const __filename = url.fileURLToPath(import.meta.url);
// to get the current parent directory
const cwd = process.cwd();

const credentials = JSON.parse(fs.readFileSync(cwd + "\\credentials.json"));

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());

const uri =
    "mongodb+srv://gaze-backend-db:cEa4WigYJ6lNDokr@gaze-backend.vb07ii6.mongodb.net/gaze-backend-db?retryWrites=true&w=majority";
// remove angle brackets around password to prevent bad auth error
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//code to connect Express server to Mongodb
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// public endpoints
// Create a post endpoint for creating a user
app.post("/api/accountsList", async (req, res) => {
    // Get the user data from the request body
    const userData = req.body;

    // Validate the user data
    if (
        !userData.uid ||
        !userData.name ||
        !userData.camera ||
        !userData.niche
    ) {
        // Return an error response if any required field is missing
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if the uid already exists in the database
    const existingUser = await Account.findOne({ uid: userData.uid });
    if (existingUser) {
        // Return a conflict error response if the uid is already taken
        return res.status(409).json({ message: "User already exists" });
    }
    // Create a new user document using the account model
    const newUser = new Account(userData);

    try {
        // Save the user document to the database
        await newUser.save();

        // Return a success response with the created user data
        return res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
    } catch (error) {
        // Return an error response if something goes wrong
        return res
            .status(500)
            .json({ message: "Something went wrong", error: error });
    }
});

app.use(async (req, res, next) => {
    // console.log(req.headers)
    const { authorization } = req.headers;

    const authtoken = authorization?.split(" ")[1];

    if (authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    }

    next();
});

app.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
});

// endpoint to get all accounts minus the current logged in user.

// Define the get endpoint
app.get("/api/accountsList", async (req, res) => {
    // Extract the current uid from the request auth header
    const { user_id = "" } = req.user;

    // Get all the accounts from the database table minus the current uid
    const accounts = await Account.find({ uid: { $ne: user_id } });

    // Send the accounts as a JSON response
    res.json(accounts);
});

// upvote endpoint
app.put("/api/accountsList/:id/upvote", async (req, res) => {
    const { id } = req.params;
    const { uid } = req.user;
    let userAccount = await Account.findOne({ uid: id });
    console.log(userAccount);
    if (!isEmpty(userAccount)) {
        const hasUpvoted = userAccount.upvotes.some((upvoteUid) => {
            return upvoteUid === uid;
        });

        if (!hasUpvoted) {
            userAccount = await Account.findOneAndUpdate(
                { uid: id },
                { $push: { upvotes: uid } },
                { new: true }
            );
            if (userAccount) {
                res.json(userAccount);
            } else {
                res.status(404).send("This account does not exist");
            }
        } else {
            res.status(409).send(
                "This user has already been upvoted by current user!"
            );
        }
    }
});

//comments endpoint
app.post("/api/accountsList/:id/comments", async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const { uid } = req.user;
    const commenter = await Account.findOne({ uid });
    let userAccount = await Account.findOne({ uid: id });
    const hasCommented = userAccount.comments.some((commenterUid) => {
        return commenterUid?.uid === uid;
    });

    if (!hasCommented) {
        userAccount = await Account.findOneAndUpdate(
            { uid: id },
            { $push: { comments: { uid, postedBy: commenter.name, text } } },
            { new: true }
        );
        if (!isEmpty(userAccount)) {
            res.json(userAccount);
        } else {
            res.send("This account does not exist");
        }
    } else {
        res.status(409).send("Current user has an existing coment!");
    }

    console.log(userAccount);
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
