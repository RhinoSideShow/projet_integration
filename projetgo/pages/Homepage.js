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

    const router = useRouter();

    const isProjetNull = () => {
        if (pro === null)
            return <div></div>
        else {
            return (
                <div className={styles.DivAbsolute}>
                    &ensp;{pro.map((projets, i) => (
                    <div key={i} className={styles.ArrayContainer} onClick={() => {
                        router.push('/post/projets/' + projets._id).then(r => r)
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
    }

    const isMembreNull = () => {
        if (user === undefined)
            return (
                <div className={styles.DivRelative}>
                    <h1>Partout dans le monde, des gens collectent des fonds pour ce qui les
                        passionne.</h1>
                    <button className={styles.ButtonCreer}>Créer un compte</button>
                </div>
            )
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
        } else if (user._status_adhesion === 'attente cotisation') {
            return (
                <>
                    <div className={styles.DivRelative}>
                        <h1>Bienvenue {user._prenom}</h1><br/>
                        <h1>Veuillez payer votre cotisation annuelle, pour bénéficier des avantages d'un membre.</h1>
                        <button className={styles.ButtonCreer} onClick={() => {
                            router.push('/Credit_Cotisation').then(r => r)
                        }}>Payer cotisation
                        </button>
                    </div>
                    <br/><br/><br/><br/>
                </>
            )
        } else if (user._status_adhesion === 'actif') {
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
        }
    }

    return (
        <>
            <div id="__next" className={styles.DivContainerHome}>
                <Navbar/>
                <div className={styles.DivContainer}>
                    <div className={styles.DivSousContainerHome}>
                        <div className={styles.DivSousSousContainerHome}>
                            <div className={styles.DivRelative}>
                                {isMembreNull()}
                                <br/><br/>
                                <h2>Top projets</h2>
                                <hr/>
                                <br/>
                                <div className={styles.DivAbsolute}>
                                    &ensp;{projets.map((projets, i) => (
                                    <div key={i} className={styles.ArrayContainer} onClick={() => {
                                        router.push('/post/projets/' + projets._id + '&' + user._id).then(r => r)
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}