import styles from '../../../styles/Home.module.css';
import Credit_Cotisation from "../../Credit_Cotisation";
import CreateProjet from "../../CreateProjet";

export default function CreationProjet({membre}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {membre && (
                <>
                    <CreateProjet membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.CrProject}`)
    const membre = await data.json();

    return {
        props: {membre,}
    }
}