import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import {useRef, useState} from "react";

export default function Editeur({projet, membre}) {

    const router = useRouter();
    const [titre, setTitre] = useState("");
    const [budget, setBudget] = useState("");
    const [desc, setDesc] = useState("");
    const [somm, setSomm] = useState("");

    const handleOnClick = () => {

        fetch(`http://localhost:3000/api/editProjet?edprojet=${[projet._id, titre, budget, desc, somm]}`).then(r => r);
        router.push('/post/projets/' + projet._id + '&' + membre._id);
    }

    return (
        <>
            <div id="__next" className={styles.DivContainer}>
                <Head>
                    <title>Editez votre projet</title>
                </Head>
                <div className={styles.DivSousContainerCreate}>
                    <div className={styles.DivSousSousContainerCreate}>
                        <div className={styles.DivImageEtTexte}>
                            <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoCreate}/>
                            <h3>Editez votre projet</h3></div>
                        <input type="text" onChange={e => setTitre(e.target.value)}
                               className={styles.Input}
                               placeholder="Titre du projet"/>
                        <br/><br/>
                        <input type="text" onChange={e => setBudget(e.target.value)}
                               className={styles.Input}
                               placeholder="Budget du projet"/>
                        <br/><br/>
                        <input type="text" onChange={e => setDesc(e.target.value)}
                               className={styles.Input}
                               placeholder="Description du projet"/>
                        <br/><br/>
                        <textarea type="text" onChange={e => setSomm(e.target.value)}
                                  className={styles.InputArea}
                                  placeholder="Sommaire du projet"/>
                        <br/><br/>
                        <button className={styles.ButtonProjectCreate}
                                onClick={handleOnClick}>Soumettre
                        </button>
                        <button className={styles.ButtonProjectCreate} onClick={() => router.push('/post/membre/' + membre._id)}>Retour
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

