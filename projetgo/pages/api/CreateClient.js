import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

    let query = req.query.client;

    let tab = query.split(',');
    let nom = tab[0];
    let prenom = tab[1];
    let email = tab[2];
    let tel = tab[3];
    let adresse = tab[4];

    const client = await clientPromise;

    const db = client.db("projet_go");
    await db.collection("clients").insertOne({_nom: nom, _prenom: prenom, _email: email, _telephone: tel, _adresse: adresse });
}