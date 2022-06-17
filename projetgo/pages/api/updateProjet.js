import clientPromise from '../../lib/mongodb'
import {ObjectId} from 'mongodb';

export default async function handler(req, res) {
    //Requete pour trouver le createur du projet & ajoute une instance dans la tab projets
    const query = req.query.projets;
    console.log(query);

    let tab = query.split(',');
    let createur = tab[0];
    let titre = tab[1];
    let budget = tab[2];
    let desc = tab[3];
    let debut = tab[4];
    let fin = tab[5];
    let status =  tab[6];
    let fonds = tab[7];
    let somm = tab[8];

    const client = await clientPromise;

    const db = client.db("projet_go");
    const membreCreateur = await db.collection("membres").findOne({_id: new ObjectId(createur)});

    await db.collection("projets").insertOne({_createur : createur,_titre : titre,_budget : budget,_desc : desc, _debut : debut, _fin : fin, _status : status, _fonds : parseFloat(fonds), _somm : somm, _liste:[membreCreateur]});
}