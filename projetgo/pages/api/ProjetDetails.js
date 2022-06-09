import clientPromise from '../../lib/mongodb'
import {ObjectId} from 'mongodb';

export default async function handler(req, res) {

    const query = req.query.projets;

    let tab = query.split(',');
    let membre = tab[0];
    let titre = tab[1];
    let budget = tab[2];
    let desc = tab[3];
    let somm = tab[4];

    const client = await clientPromise;

    console.log(query);
    const db = client.db("projet_go");
    const data = await db.collection("projets").insertOne({_createur = membre,_titre = titre, _budget = budget, _desc = desc, _somm = somm});

}