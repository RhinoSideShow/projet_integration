import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    //Requete pour ajouter les fonds a un projet & requete pour ajouter une instance dans la table dons
    let query = req.query.fonds;
    let today = new Date().toLocaleDateString();

    console.log(today);

    let tab = query.split(',');
    let projetId = tab[0];
    let money = tab[1];
    let membreId = tab[2];

    const client = await clientPromise;

    const db = client.db("projet_go");
    await db.collection("projets").updateOne({_id: new ObjectId(projetId)}, {$inc: {_fonds: parseFloat(money)}});

    await db.collection("dons").insertOne({_date:today, _montant:parseFloat(money), _type:"credit", _projet:projetId, _info: membreId});
}