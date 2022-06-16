import styles from '../../../styles/Home.module.css';
import DeleteProjet from "../../DeleteProjet";
import clientPromise from "../../../lib/mongodb";

export default function ProjetDelete({projet}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <DeleteProjet projet={projet}/>
                </>
            )}
        </div>
    )
}



export async function getServerSideProps({params}) {


    const projet = params.delprojet;

    const client = await clientPromise;
    const db = client.db("projet_go");

    return {
        props: {projet,}
    }
}