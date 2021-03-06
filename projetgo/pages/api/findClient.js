import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";
export default async  function handler(req,res){
    const query = req.query.client;
    const client = await clientPromise;
    //Requete pour trouver un client
    const db = client.db("projet_go");
    const data = await db.collection("clients").findOne({_id: new ObjectId(query)})

    res.json(data);
}