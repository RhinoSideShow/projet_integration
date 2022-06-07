import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";
export default async  function handler(req,res){
    const query = req.query.emailpw;
    const client = await clientPromise;

    const db = client.db("projet_go");
    const data = await db.collection("membres").findOne({_id: new ObjectId(query)})

    res.json(data);
}
