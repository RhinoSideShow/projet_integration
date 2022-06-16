import styles from '../../../styles/Home.module.css';
import EditeurDeProjet from "../../EditeurDeProjet";
import clientPromise from "../../../lib/mongodb";

export default function ProjetEdit({projet}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <EditeurDeProjet projet={projet}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {


    const projet = params.edprojet;

    const client = await clientPromise;
    const db = client.db("projet_go");



    return {
        props: {projet,}
    }
}