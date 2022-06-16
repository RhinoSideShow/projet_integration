import styles from '../../../styles/Home.module.css';
import Editeur from "../../EditeurDeProjet";

export default function ProjetEdit({projet, membre}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <Editeur projet={projet} membre={membre}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    let query = params.edprojet
    let tab = query.split('&');
    let projetId = tab[0];
    let user_id = tab[1];

    const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projetId}`)
    const projet = await data.json();

    const data2 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${user_id}`)
    const membre = await data2.json();

    return {
        props: {projet, membre}
    }
}