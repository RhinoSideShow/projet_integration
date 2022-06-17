import styles from '../../../styles/Home.module.css';
import InformationClient from "../../InformationClient";
import clientPromise from "../../../lib/mongodb";

export default function ClientInfo({plan, clients}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {clients && (
                <>
                    <InformationClient projets={plan} clients={clients}/>
                </>
            )}
        </div>
    )
}

//Envoi les objet projet et client a la page InformationClient
export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${params.client}`)
    const plan = await data.json();

    const client = await clientPromise;
    const db = client.db("projet_go");

    const data2 = await db.collection("clients").find({}).toArray();
    const clients = JSON.parse(JSON.stringify(data2));

    return {
        props: {plan, clients}
    }
}