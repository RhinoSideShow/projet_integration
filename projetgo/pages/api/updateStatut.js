import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    const query = req.query.cotisation;
    const client = await clientPromise;

    const db = client.db("projet_go");
    await db.collection("membres").updateOne({_status_adhesion: query}, {$set: {_status_adhesion: "actif"}})
}