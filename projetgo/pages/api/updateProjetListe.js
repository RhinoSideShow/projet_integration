import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {

    let query = req.query.updateProjetListe;


    let tab = query.split(',');
    let projetId = tab[0];
    let membre = tab[1] + " " +tab[2];

    const client = await clientPromise;

    const db = client.db("projet_go");
    await db.collection("projets").updateOne({_id: new ObjectId(projetId)}, {$push: {_liste: membre}});

}