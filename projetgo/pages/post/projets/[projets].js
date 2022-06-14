import styles from '../../../styles/Home.module.css';
import Navbar from "../../../Components/Navbar";
import {useRouter} from "next/router";

export default function AffichageProjets({projet, membre, createur}) {
    const router = useRouter();
    return (
        <div id="__next" className={styles.DivContainerProjet}>
            { (
                <>
                    <div className={styles.DivSousContainerProjet}>
                        <Navbar membre={membre}/>
                        <div className={styles.DivSousSousContainerProjet}>
                            <div className={styles.DivSousSousSousContainerProjet}>
                                <div>
                                    <div className={styles.DivSousSousContainerProjetText}>
                                        <div>
                                            <h1>{projet._titre}</h1>
                                        </div>

                                        <div><p>{createur._prenom + " "+ createur._nom + " organise ce projet."}</p><br/>
                                            <div className={styles.DivButtonEdit}>
                                                {membre === undefined ? null : membre._admin === true ?
                                                    <button className={styles.ButtonProjetEdit}>Éditer</button> :
                                                    membre._id === createur._id ? <button className={styles.ButtonProjetEdit}>Éditer</button> : null}
                                                {membre === undefined ? null : membre._admin === true ?
                                                    <button
                                                        className={styles.ButtonProjetEdit}>Supprimer</button> :
                                                    membre._id === createur._id ? <button className={styles.ButtonProjetEdit}>Supprimer</button> : null}
                                            </div>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>Sommaire</h3>
                                            <p>{projet._somm}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>Commencement</h3>
                                            <p>{projet._debut}</p>
                                            <h3>Fin</h3>
                                            <p>{projet._fin}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>Créateur du projet</h3>
                                            <p>{createur._prenom + " " + createur._nom}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                    </div>

                                    <div className={styles.DivSousSousContainerProjetDiv}>
                                        <div>
                                            <p><span className={styles.FontBleu}>{projet._fonds}$</span> récoltés sur un
                                                objectif de<br/> {projet._budget}$</p>
                                        </div>
                                        <div>
                                            {projet._status}

                                            <button className={ styles.ButtonProjetDonation} onClick={()=> {router.push('/post/clients/' + projet._id).then(r => r)}}>
                                                Participez au projet
                                            </button>
                                        </div>
                                        <br/>
                                        <div>
                                            {membre === undefined ?
                                                <button className={styles.ButtonProjetDonation} onClick={() => {router.push('/post/clients/' + projet._id).then(r => r)}}>
                                                    Faire une donation
                                                </button> :
                                                membre._benevole ? null :
                                                    <button className={styles.ButtonProjetDonation} onClick={() => {
                                                        membre === undefined ? router.push('/post/fonds/' + projet._id) :
                                                            router.push('/post/fonds/' + projet._id + '&' + membre._id)
                                                    }}>Faire une donation</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    let tabEmailPw = params.projets.split("&");

    let projet_id = tabEmailPw[0];
    let user_id = tabEmailPw[1];

    if (user_id !== undefined) {
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projet_id}`)
        const projet = await data.json();

        const data2 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${user_id}`)
        const membre = await data2.json();

        let test = projet._createur;

        const data3 = await  fetch(`http://localhost:3000/api/membrelogin?emailpw=${test}`)
        const createur = await data3.json();

        return {
            props: {projet, membre, createur}
        }
    } else {
        user_id = null
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projet_id}`)
        const projet = await data.json();

        let test = projet._createur;
        const data3 = await  fetch(`http://localhost:3000/api/membrelogin?emailpw=${test}`)
        const createur = await data3.json();

        return {
            props: {projet, user_id, createur}
        }
    }
}