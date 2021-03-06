import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    //Requete pour editer le status adhesion a actif et la date adhesion d'un membre apres avoir payer ces frais de cotisation
    const query = req.query.cotisation;
    const client = await clientPromise;
    let date = new Date();

    const db = client.db("projet_go");
    await db.collection("membres").updateOne({_id: new ObjectId(query)}, {$set: {_status_adhesion: "actif"}})
    await db.collection("membres").updateOne({_id: new ObjectId(query)}, {$set: {_date_adhesion: date}})
}