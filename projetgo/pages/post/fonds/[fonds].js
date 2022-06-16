import styles from '../../../styles/Home.module.css';
import Credit_Don from "../../Credit_Don";

export default function Donation({projet, membre, isClient}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <Credit_Don projet={projet} membre={membre} isClient={isClient}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {
    //Envoi les objet projet, membre et isClient(boolean) a la page Credit_Don.js
    let isClient = false;
    let query = params.fonds
    let tab = query.split('&');
    let projetId = tab[0];
    let user_id = tab[1];

    if (user_id !== undefined) {
        console.log(query)

        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projetId}`)
        const projet = await data.json();

        const data2 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${user_id}`)
        const membre = await data2.json();

        console.log(membre);

        if(membre === null || membre === undefined){
            const data2 = await fetch(`http://localhost:3000/api/findClient?client=${user_id}`)
            const membre = await data2.json();
            isClient = true;

            console.log("here")
            console.log(membre)

            return {
                props: {projet, membre, isClient}
            }
        }
        else {
            return {
                props: {projet, membre, isClient}
            }
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