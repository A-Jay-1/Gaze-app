import mongoose from "mongoose";
const { Schema, model } = mongoose;

const accountSchema = new Schema(
    {
        uid: String,
        name: String,
        camera: String,
        niche: String,
        comments: [{ type: Object }],
        upvotes: [{ type: String }],
    },
    { timestamps: true }
);

accountSchema.methods.toJSON = function () {
    // Convert the document to a plain object
    const obj = this.toObject();
    // Delete the fields you don't want to return
    delete obj._id;
    delete obj.__v;
    delete obj.createdAt;
    delete obj.updatedAt;
    // Return the modified object
    return obj;
};

export default model("accounts", accountSchema);
