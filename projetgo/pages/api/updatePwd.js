import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    //Requete pour editer le mot de passe d'un membre
    let query = req.query.motdepasse;
    console.log(query)

    let tab = query.split(',');
    let membreId = tab[0];
    let nouveauMotDePasse = tab[1];

    console.log(typeof nouveauMotDePasse)
    const client = await clientPromise;

    const db = client.db("projet_go");
    await db.collection("membres").updateOne({_id: new ObjectId(membreId)}, {$set: {_pw: nouveauMotDePasse}})
}