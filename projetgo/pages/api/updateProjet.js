import clientPromise from "../../lib/mongodb";
import {ObjectId} from "mongodb";
export default async  function handler(req,res){
   
    let query = req.query.create

    let tab = query.split(',');
    let membreId = tab[0];
    let projetdetails = tab[1];

    const client = await clientPromise;

    console.log("here")
    console.log(query)
    console.log(membreId)
    console.log(projetdetails)

    const db = client.db("projet_go");
    const data = await db.collection("projets").insertOne({_id: new ObjectId(query)})

    res.json(data);
}
