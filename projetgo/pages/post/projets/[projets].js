import styles from '../../../styles/Home.module.css';
import Navbar from "../../../Components/Navbar";
import {useRouter} from "next/router";

export default function AffichageProjets({projet, membre, createur, conseil}) {
    const router = useRouter();

    //Pour cette fonction si le texte du boutton S'abonner === Abonné si true, il regarde si le id de l'utilisateur est
    // dans la liste des membres du projet si true il envoi le projet id et le membre id dans l'api deleteProjetListe
    // (qui supprime le membre de la liste des membres du projet)et il change le texte du boutton pour S'abonner et
    // sa couleur pour #0272fc.
    //
    // Sinon il envoi le projet id et le membre id dans l'api updateProjetListe(qui ajoute le membre dans la liste des
    // membres du projet) et il change le texte du boutton pour Abonné et sa couleur pour gray.

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

    //Pour cette fonction, il regarde si le id de l'utilisateur est dans la liste des membres du projet. Si true, il
    //retourne true  ce qui change au chargement de la page le texte et la couleur du boutton.
    function colorChange() {
        for (let i = 0; i < projet._liste.length; i++) {
            if (projet._liste[i]._id === membre._id || projet._createur === createur._id && membre._id === createur._id)
                return true;
        }
    }

    //Pour cette fonction, eest réservé pour les admins. Quand un admin fait la révision d'un projet dans le conseil
    //d'administration, il va avoir 2 bouttons Accepter et Refuser.
    //
    // Cette fonction est pour quand il click sur Accepter, elle envoi l'api updateProjetStatus le projet id ainsi que
    // true pour changer dans la bd le status du projet pour true. Ce qui va mettre le projet visible pour tout le monde
    // dans la section Top projets du HomePage.js.
    //
    // Après, il retourne à la page conseil d'administration de l'admin.
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
                                            {/*Si conseil = true alors il affiche <p>budget: {projet._budget} $</p> sinon il affiche null */}
                                            {conseil === true ? <p>budget: {projet._budget} $</p> : null}
                                            <br/>

                                            {/*LEGENDE
                                            condition ? exprIfTrue : exprIfFalse*/}
                                            <div className={styles.DivButtonEdit}>
                                                {conseil !== true ? membre === undefined ? null : membre._admin === true ?
                                                        <button className={styles.ButtonProjetEdit} onClick={() => {router.push('/post/EdProjet/' + projet._id + '&' + membre._id)}}>Éditer</button> :
                                                        membre._id === createur._id ? <button
                                                            className={styles.ButtonProjetEdit} onClick={() => {router.push('/post/EdProjet/' + projet._id + '&' + membre._id)}}>Éditer</button> : null :
                                                    <button
                                                        className={styles.ButtonProjetEdit}
                                                        onClick={handleAccept}>Accepter</button>}
                                                {conseil !== true ? membre === undefined ? null : membre._admin === true ?
                                                        <button
                                                            className={styles.ButtonProjetEdit} onClick={() => {router.push('/post/delProjet/' + projet._id + '&' + membre._id)}}>Supprimer</button> :
                                                        membre._id === createur._id ? <button
                                                            className={styles.ButtonProjetEdit} onClick={() => {router.push('/post/delProjet/' + projet._id + '&' + membre._id)}}>Supprimer</button> : null :
                                                    <button
                                                        className={styles.ButtonProjetEdit} onClick={() => {router.push('/post/delProjet/' + projet._id + '&' + membre._id)}}>Refuser</button>}
                                            </div>
                                            <hr/>
                                        </div>

                                        {/*block donnant les informations du projet(Sommaire, Commencement, Fin,
                                         Créateur du projet et la liste des membres et des bénévoles )*/}
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
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <br/>

                                    </div>
                                    {/******************************************************************************/}

                                    {/*LEGENDE
                                    condition ? exprIfTrue : exprIfFalse*/}

                                   {/*On ne voit pas ce bloc de code si un admin est dans le conseil d'administration*/}
                                    {conseil !== true ? <div className={styles.DivSousSousContainerProjetDiv}>
                                        <div>
                                            <p><span className={styles.FontBleu}>{projet._fonds}$</span> récoltés sur un
                                                objectif de<br/> {projet._budget}$</p>
                                        </div>
                                        <br/>
                                        <div>
                                            <div style={{float:"left", marginRight:20}}>
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
                                            </div>

                                            { membre !== undefined ?
                                            <div style={{float:"left"}}>
                                            {membre._status_adhesion !== "attente cotisation" ? membre !== undefined ? projet._liste !== undefined ? projet._liste.some(colorChange) ?
                                                    <button className={styles.ButtonProjetDonation} type="button"
                                                            id="btnSub"
                                                            style={{backgroundColor: "gray"}}
                                                            onClick={handleShow}>Abonné</button> :
                                                    <button className={styles.ButtonProjetDonation} type="button"
                                                            id="btnSub"
                                                            onClick={handleShow}>S'abonner</button> :
                                                <button className={styles.ButtonProjetDonation} type="button"
                                                        id="btnSub"
                                                        onClick={handleShow}>S'abonner</button> : null : null
                                            }
                                            </div>:null}
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

    //Envoi les objet projet, membre, createur et conseil(boolean) a la ligne 5 si isConseil = true
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

    //Envoi les objet projet, membre, createur et conseil(boolean) a la ligne 5 si le user est un membre, benevole
    //ou admin
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
    }
    //Envoi les objet projet, membre, createur et conseil(boolean) a la ligne 5 si user est un client(undefined)
    else {
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