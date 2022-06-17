import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    //Requete pour editer le status d'un projet
    const query = req.query.status;
    const client = await clientPromise;

    let tab = query.split(',');
    let projetId = tab[0];
    let status = tab[1]

    const db = client.db("projet_go");
    await db.collection("projets").updateOne({_id: new ObjectId(projetId)}, {$set: {_status: status}});
}