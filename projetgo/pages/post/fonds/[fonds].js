import styles from '../../../styles/Home.module.css';
import Credit_Don from "../../Credit_Don";

export default function Donation({projet, membre}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <Credit_Don projet={projet} membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    let query = params.fonds
    let tab = query.split('&');
    let projetId = tab[0];
    let user_id = tab[1];

    if (user_id !== undefined) {
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projetId}`)
        const projet = await data.json();

        const data2 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${user_id}`)
        const membre = await data2.json();

        return {
            props: {projet, membre}
        }
    } else {
        user_id = null
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projetId}`)
        const projet = await data.json();

        return {
            props: {projet, user_id}
        }
    }
}