import styles from '../../../styles/Home.module.css';
import clientPromise from "../../../lib/mongodb";
import Homepage from "../../Homepage";
import Credit_Cotisation from "../../Credit_Cotisation";

export default function ChangerStatusAdhesion({membre}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {membre && (
                <>
                    <Credit_Cotisation membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.statusAdhesion}`)
    const membre = await data.json();


    return {
        props: {membre,}
    }
}