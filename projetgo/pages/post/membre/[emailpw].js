import styles from '../../../styles/Home.module.css';
import Homepage from "../../Homepage";
import clientPromise from "../../../lib/mongodb";

export default function VerifSignIn({membre, projets}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {membre && (
                <>
                    <Homepage projets={projets} membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.emailpw}`)
    const membre = await data.json();

    const client = await clientPromise;
    const db = client.db("projet_go");

    const data2 = await db.collection("projets").find({}).toArray();
    const projets = JSON.parse(JSON.stringify(data2));

    return {
        props: {membre, projets}
    }
}