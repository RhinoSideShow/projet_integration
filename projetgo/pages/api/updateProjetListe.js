import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";
import membre from "../../models/Membre";

export default async function handler(req, res) {
    //Requete pour trouver un membre & l'ajouter a la liste d'un projet
    let query = req.query.updateProjetListe;

    let tab = query.split(',');
    let projetId = tab[0];
    let membreId = tab[1]

    const client = await clientPromise;
    const db = client.db("projet_go");

    const data = await db.collection("membres").findOne({_id: new ObjectId(membreId)});

    await db.collection("projets").updateOne({_id: new ObjectId(projetId)}, {$push: {_liste: data}});
}