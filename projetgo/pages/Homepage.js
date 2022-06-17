import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import clientPromise from "../lib/mongodb";
import {useState} from "react";

export async function getServerSideProps(context) {

    const client = await clientPromise;
    const db = client.db("projet_go");

    const data = await db.collection("projets").find({}).toArray();
    const projets = JSON.parse(JSON.stringify(data));

    return {
        props: {projets},
    }
}

export default function Homepage({projets, membre}) {

    const [user, setUser] = useState(membre);
    const [pro, setPro] = useState(projets);
    const [sub, setSub] = useState();
    const router = useRouter();
    let data = [];
    let arrayProjets = [];

    function LoadOnce() {
        if (!window.location.hash) {
            window.location = window.location + '#Loaded';
            window.location.reload();
        }
    }

    const afficherProjets = () => {
        for (let i = 0; i < projets.length; i++) {
            if(projets[i]._status === "true"){
                arrayProjets.push(projets[i]);
            }
        }

        return (
            <div className={styles.DivAbsolute}>
                {arrayProjets.map((projets, i) => (
                    <div key={i} className={styles.ArrayContainer} onClick={() => {
                        {
                            user === undefined ? router.push('/post/projets/' + projets._id).then(r => r) :
                                router.push('/post/projets/' + projets._id + '&' + user._id).then(r => r)
                        }
                    }}>
                        <h3 style={{color: "#0272fc"}}>{projets._titre}</h3>
                        {projets._desc}<br/>
                        <span style={{
                            bottom: 20,
                            left: 20,
                            position: "absolute"
                        }}>{projets._fonds + " $ de " + projets._budget + " $"}</span>
                    </div>))}
            </div>
        )
    }

    const isSub = () => {
        let isTrue = false;

        if (membre === undefined)
            return <div></div>

        for (let i = 0; i < projets.length; i++) {
            if ((projets[i]._createur).valueOf() === (membre._id).valueOf() && projets[i]._status === "true") {
                data.push(projets[i]);
            }
        }

        return (
            <div className={styles.DivAbsolute}>
                {data.map((projet, i) => (
                    <div key={i} className={styles.ArrayContainer} onClick={() => {
                        user === undefined ? router.push('/post/projets/' + projet._id).then(r => r) :
                            router.push('/post/projets/' + projet._id + '&' + user._id).then(r => r)
                    }}>
                        <h3 style={{color: "#0272fc"}}>{projet._titre}</h3>
                        {projet._desc}<br/>
                        <span style={{
                            bottom: 20,
                            left: 20,
                            position: "absolute"
                        }}>{projet._fonds + " $ de " + projet._budget + " $"}</span>
                    </div>))}
            </div>
        )

    }
    /*Vue Par Personne*/
    const isMembreNull = () => {
        if (user === undefined)
            return (
                <>
                    <div className={styles.DivRelative}>
                        <h1>Partout dans le monde, des gens collectent des fonds pour ce qui les
                            passionne.</h1>
                        <button className={styles.ButtonCreer} onClick={() => {
                            router.push('/new')
                        }}>Créer un compte
                        </button>
                    </div>
                </>
            )

        /*Vue Par Benevole*/
        else if (user._benevole) {
            return (
                <>
                    <div className={styles.DivRelative}>
                        <h1>Bienvenue {user._prenom}</h1>
                    </div>
                    <br/><br/><br/><br/>
                    <h2>Vos projets</h2>
                    <hr/>
                    <br/><br/><br/><br/>
                </>
            )

            /*Vue Par Admin*/
        } else if (user._admin) {
            return (
                <>
                    <div className={styles.DivRelative}>
                        <h1>Bienvenue {user._prenom}</h1>
                    </div>
                    <br/><br/>
                    <button className={styles.ButtonAdmin} onClick={() => {
                        router.push('/post/conseil/' + user._id)
                    }}>Conseil d'administration
                    </button>
                    <button className={styles.ButtonAdmin} onClick={() => {
                        router.push('/post/CrProject/' + user._id)
                    }}>Créer un projet
                    </button>
                    <br/><br/><br/><br/>
                    <h2>Vos projets</h2>
                    <hr/>
                    <br/>
                </>
            )

            /*Vue Par Membre actif*/
        } else if (user._status_adhesion === 'actif') {
            let date = new Date(user._date_adhesion)
            let annee = date.getFullYear()
            let mois = date.getMonth()
            let jour = date.getDate()
            let expiration = new Date(annee + 1, mois, jour)
            let dateCourante = new Date()

            if (dateCourante < expiration) {

                return (
                    <>
                        <div className={styles.DivRelative}>
                            <h1>Bienvenue {user._prenom}</h1>
                        </div>
                        <br/><br/><br/><br/>
                        <button className={styles.ButtonAdmin} onClick={() => {
                            router.push('/post/CrProject/' + user._id)
                        }}>Créer un projet
                        </button>
                        <br/><br/><br/><br/>
                        <h2>Vos projets</h2>
                        <hr/>
                        <br/>
                    </>
                )
            } else {
                return(
                <>
                    <div className={styles.DivRelative}>
                        <h1>Bienvenue {user._prenom}</h1><br/>
                        <h1>Votre abonement est expiré</h1>
                        <button className={styles.ButtonCreer} onClick={() => {
                            router.push('/post/cotisation/' + user._id).then(r => r)
                        }}>Payer cotisation
                        </button>
                    </div>
                    <br/><br/><br/><br/>
                </>
                )

            }
        }
        /* Vue par membre non-actif */
        else if (user._status_adhesion === 'attente cotisation') {
            return (
                <>
                    <div className={styles.DivRelative}>
                        <h1>Bienvenue {user._prenom}</h1><br/>
                        <h1>Veuillez payer votre cotisation annuelle, pour bénéficier des avantages d'un membre.</h1>
                        <button className={styles.ButtonCreer} onClick={() => {
                            router.push('/post/cotisation/' + user._id).then(r => r)
                        }}>Payer cotisation
                        </button>
                    </div>
                    <br/><br/><br/><br/>
                </>
            )
        }
    }

    return (
        <>
            <div onLoad={LoadOnce} id="__next" className={styles.DivContainerHome}>
                <Navbar membre={membre}/>
                <div className={styles.DivContainer}>
                    <div className={styles.DivSousContainerHome}>
                        <div className={styles.DivSousSousContainerHome}>
                            <div className={styles.DivRelative}>
                                {isMembreNull()}
                                {isSub()}
                                <br/><br/>
                                <h2>Top projets</h2>
                                <hr/>
                                <br/>
                                {afficherProjets()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}