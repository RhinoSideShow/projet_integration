import styles from '../../../styles/Home.module.css';
import Navbar from "../../../Components/Navbar";
import {useRouter} from "next/router";

export default function AffichageProjets({projet, membre, createur, conseil}) {
    const router = useRouter();

    const handleShow = () => {

        if (document.querySelector('#btnSub').innerHTML === "Abonné") {

            for (let i = 0; i < projet._liste.length; i++) {
                if (projet._liste[i]._id === membre._id) {
                    fetch(`http://localhost:3000/api/deleteProjetListe?deleteProjetListe=${[projet._id, membre._id]}`).then(r => r);
                    document.querySelector('#btnSub').innerHTML = "S'abonner";
                    document.querySelector('#btnSub').style.backgroundColor = "#0272fc";
                    break;
                }
            }
        } else {
            document.querySelector('#btnSub').innerHTML = "Abonné";
            document.querySelector('#btnSub').style.backgroundColor = "gray";
            fetch(`http://localhost:3000/api/updateProjetListe?updateProjetListe=${[projet._id, membre._id]}`).then(r => r);
        }
    }

    function colorChange() {
        for (let i = 0; i < projet._liste.length; i++) {
            if (projet._liste[i]._id === membre._id || projet._createur === createur._id && membre._id === createur._id)
                return true;
        }
    }

    const handleAccept = () => {
        let status = true;
        fetch(`http://localhost:3000/api/updateProjetStatus?status=${[projet._id, status]}`).then(r => r);
        router.push('/post/conseil/' + membre._id)
    }

    return (
        <div id="__next" className={styles.DivContainerProjet}>
            {(
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

                                        <div><p>{createur._prenom + " " + createur._nom + " organise ce projet."}</p>
                                            {conseil === true ? <p>budget: {projet._budget} $</p> : null}
                                            <br/>
                                            <div className={styles.DivButtonEdit}>
                                                {conseil !== true ? membre === undefined ? null : membre._admin === true ?
                                                        <button className={styles.ButtonProjetEdit}>Éditer</button> :
                                                        membre._id === createur._id ? <button
                                                            className={styles.ButtonProjetEdit}>Éditer</button> : null :
                                                    <button
                                                        className={styles.ButtonProjetEdit}
                                                        onClick={handleAccept}>Accepter</button>}
                                                {conseil === true ? membre === undefined ? null : membre._admin === true ?
                                                        <button
                                                            className={styles.ButtonProjetEdit}>Supprimer</button> :
                                                        membre._id === createur._id ? <button
                                                            className={styles.ButtonProjetEdit}>Supprimer</button> : null :
                                                    <button
                                                        className={styles.ButtonProjetEdit}>Refuser</button>}
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

                                        <div><h3>Liste des membres et des bénévoles</h3>
                                            {projet._liste !== undefined ? projet._liste.map((id, i) => (
                                                <p key={i}>{id._prenom} {id._nom}</p>
                                            )) : null}</div>

                                    </div>

                                    {conseil !== true ? <div className={styles.DivSousSousContainerProjetDiv}>
                                        <div>
                                            <p><span className={styles.FontBleu}>{projet._fonds}$</span> récoltés sur un
                                                objectif de<br/> {projet._budget}$</p>
                                        </div>
                                        <br/>
                                        <div>
                                            {membre === undefined ?
                                                <button className={styles.ButtonProjetDonation} onClick={() => {
                                                    router.push('/post/clients/' + projet._id).then(r => r)
                                                }}>
                                                    Faire un don
                                                </button> :
                                                membre._benevole ? null :
                                                    <button className={styles.ButtonProjetDonation} onClick={() => {
                                                        membre === undefined ? router.push('/post/fonds/' + projet._id) :
                                                            router.push('/post/fonds/' + projet._id + '&' + membre._id)
                                                    }}>Faire un don</button>
                                            }

                                            {membre !== undefined ? projet._liste !== undefined ? projet._liste.some(colorChange) ?
                                                    <button className={styles.ButtonProjetDonation} type="button"
                                                            id="btnSub"
                                                            style={{backgroundColor: "gray"}}
                                                            onClick={handleShow}>Abonné</button> :
                                                    <button className={styles.ButtonProjetDonation} type="button"
                                                            id="btnSub"
                                                            onClick={handleShow}>S'abonner</button> :
                                                <button className={styles.ButtonProjetDonation} type="button"
                                                        id="btnSub"
                                                        onClick={handleShow}>S'abonner</button> : null
                                            }
                                        </div>
                                    </div> : null}
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
    let isConseil = tabEmailPw[2];

    if (isConseil === "true") {
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projet_id}`)
        const projet = await data.json();

        const data2 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${user_id}`)
        const membre = await data2.json();

        let conseil = true;

        let test = projet._createur;

        const data3 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${test}`)
        const createur = await data3.json();

        return {
            props: {projet, membre, createur, conseil}
        }
    }

    if (user_id !== undefined) {
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projet_id}`)
        const projet = await data.json();

        const data2 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${user_id}`)
        const membre = await data2.json();

        let conseil = false;

        let test = projet._createur;

        const data3 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${test}`)
        const createur = await data3.json();

        return {
            props: {projet, membre, createur, conseil}
        }
    } else {
        user_id = null
        const data = await fetch(`http://localhost:3000/api/ProjetDetails?client=${projet_id}`)
        const projet = await data.json();

        let conseil = false;

        let test = projet._createur;
        const data3 = await fetch(`http://localhost:3000/api/membrelogin?emailpw=${test}`)
        const createur = await data3.json();

        return {
            props: {projet, user_id, createur, conseil}
        }
    }
}