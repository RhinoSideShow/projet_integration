import styles from '../../../styles/Home.module.css';
import MotDePasseOublier from "../../MotDePasseOublier";

export default function OublierMotDePasse({membre}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {membre && (
                <>
                    <MotDePasseOublier membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {
    //Envoi l'objet membre a la page MotDepAsseOublier.js
    const data = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${params.motdepasse}`)
    const membre = await data.json();

    return {
        props: {membre,}
    }
}