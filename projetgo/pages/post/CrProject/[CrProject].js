import styles from '../../../styles/Home.module.css';
import CreateProject from "../../CreateProject";
import clientPromise from "../../../lib/mongodb";

export default function CreationProjet({membre}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {membre && (
                <>
                    <CreateProject membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {
    //Envoi l'objet memebre a la page CreateProject.js
    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.CrProject}`)
    const membre = await data.json();

    const client = await clientPromise;
    const db = client.db("projet_go");

    return {
        props: {membre,}
    }
}