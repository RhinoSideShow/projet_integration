import styles from '../../../styles/Home.module.css';
import ConseilAdmin from "../../Conseil";
import clientPromise from "../../../lib/mongodb";

export default function ClientInfo({membre,projets}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {membre && (
                <>
                    <ConseilAdmin membre={membre} projets={projets}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.conseil}`)
    const membre = await data.json();

    const client = await clientPromise;
    const db = client.db("projet_go");

    const dataProjet = await db.collection("projets").find({}).toArray();
    const projets = JSON.parse(JSON.stringify(dataProjet));

    return {
        props: {membre,projets}
    }
}