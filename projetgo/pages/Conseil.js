import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import {useRouter} from "next/router";

export default function ConseilAdmin({membre, projets}) {

    let array = [];

    //va chercher les instances de projets avec les attributs qui sont false (le statut est a false par default) et les push dans le array cree ci dessus
    function handleStatut(){
        for (let i = 0; i < projets.length; i++) {
            if (projets[i]._status === "false") {
                array.push(projets[i]);
            }
        }

        return (
            <div className={styles.DivAbsolute}>

                {/* place le array declaree dans du front end afin que les admins peuvent cliquer pour approuver */}
                {array.map((projets, i) => (
                    <div key={i} className={styles.ArrayContainer} onClick={() => {
                        {
                            router.push('/post/projets/' + projets._id + '&' + membre._id + '&' + "true").then(r => r)
                        }
                    }}>
                        {/* utilise la methode router.push pour envoyer les projets avec le changement dans le statut   */}
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
//affichage de la liste de projets a approuver avec la methode handlestatut
    const router = useRouter();
    return (
        <>
            <div id="__next" className={styles.DivContainerHome}>
                <Navbar membre={membre}/>
                <div className={styles.DivContainer}>
                    <div className={styles.DivSousContainerHome}>
                        <div className={styles.DivSousSousContainerHome}>
                            <div className={styles.DivRelative}>
                                <div className={styles.DivRelative}>
                                    <h1>Conseil d'administration</h1>
                                </div>
                                <br/><br/><br/><br/>
                                <h2>Les projets</h2>
                                <hr/>
                                <br/>
                                {handleStatut()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}