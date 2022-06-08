import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {

    let query = req.query.fonds;
    console.log(query)

    let tab = query.split(',');
    let projetId = tab[0];
    let money = tab[1];

    const client = await clientPromise;

    console.log("here")
    console.log(projetId)
    console.log(money)

    const db = client.db("projet_go");
    await db.collection("projets").updateOne({_id: new ObjectId(projetId)}, {$inc: {_fonds: parseFloat(money)}})
}