import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";


export default function CreateProject({ProjectCreate}) {

    Handle
    
    
    const router = useRouter();

    return (
        <>
            <div id="__next" className={styles.DivContainer}>
                <Head>
                    <title>Creez votre projet</title>
                </Head>
                <div className={styles.DivSousContainer}>
                    <div className={styles.DivSousContainerCreate}>
                        <div className={styles.DivImageEtTexte}>
                            <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoCreate}/>
                            <h3>Creez votre projet</h3></div>
                        <input type="text" className={styles.Input} placeholder="Nom du projet"/>
                        <br/><br/>
                        <input type="text" className={styles.Input} placeholder="Budget"/>
                        <br/><br/>
                        <input type="text" className={styles.Input} placeholder="Description courte du projet"/>
                        <br/><br/>
                        <textarea type="text" className={styles.InputArea} placeholder="Sommaire du projet"/>
                        <br/><br/>
                        <button className={styles.ButtonProjectCreate}
                                onClick={() => router.push('/Animation_Credit_Don')}>Soumettre
                        </button>
                        <button className={styles.ButtonProjectCreate} onClick={() => router.push('/Homepage')}>Retour
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}
