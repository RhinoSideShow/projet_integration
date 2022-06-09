import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";
export default async  function handler(req,res){
   
    let query = req.query.create
    const client = await clientPromise;

    const db = client.db("projet_go");
    const data = await db.collection("projets").insertOne({_id: new ObjectId(query)})

    res.json(data);
}
