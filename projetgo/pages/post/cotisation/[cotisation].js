import styles from '../../../styles/Home.module.css';
import Credit_Cotisation from "../../Credit_Cotisation";

export default function PayerCotisation({membre}) {

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
    //Envoi l'objet membre a la page Credit_Cotisation.js
    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.cotisation}`)
    const membre = await data.json();

    return {
        props: {membre,}
    }
}