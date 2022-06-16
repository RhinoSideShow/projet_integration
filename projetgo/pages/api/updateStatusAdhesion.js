import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    //Requete pour editer le status d'adhesion d'un membre lorsque son abonement arrive a terme
    const query = req.query.statusAdhesion;
    const client = await clientPromise;

    const db = client.db("projet_go");
    await db.collection("membres").updateOne({_id: new ObjectId(query)}, {$set: {_status_adhesion: "attente cotisation"}})
}