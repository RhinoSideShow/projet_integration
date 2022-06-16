import clientPromise from '../../lib/mongodb'
import {ObjectId} from 'mongodb';

export default async function handler(req, res) {
    //Requete pour trouver un projet
    const query = req.query.client;
    const client = await clientPromise;


    const db = client.db("projet_go");
    const data = await db.collection("projets").findOne({_id: new ObjectId(query)});
    res.json(data);
}