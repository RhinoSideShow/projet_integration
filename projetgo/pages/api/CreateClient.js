import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

    let query = req.query.client;
    //Separe linformation recueilli en variable
    let tab = query.split(',');
    let nom = tab[0];
    let prenom = tab[1];
    let email = tab[2];
    let tel = tab[3];
    let adresse = tab[4];

    const client = await clientPromise;
    //Recherche dans la bd du projet
    const db = client.db("projet_go");
    //Ajoute une nouvelle instance de client dans la tab clients
    await db.collection("clients").insertOne({_nom: nom, _prenom: prenom, _email: email, _telephone: tel, _adresse: adresse });
    //Verifie si l'email existe deja dans la base de donner
    const data = await db.collection("clients").findOne({_email: email});
    console.log(data)
    res.json(data)
}