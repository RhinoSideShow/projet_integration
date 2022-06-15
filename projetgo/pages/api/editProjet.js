import clientPromise from '../../lib/mongodb'
import {ObjectId} from 'mongodb';

export default async function handler(req, res) {

    const query = req.query.edprojet;

    console.log(query);
    let tab = query.split(',');
    let projetId = tab[0];
    let titre = tab[1];
    let budget = tab[2];
    let desc = tab[3];;
    let somm = tab[4];


    const client = await clientPromise;

    const db = client.db("projet_go");
    const data = await db.collection("projets").updateOne({_id : ObjectId(projetId)},  {$set :{_titre : titre}})

}