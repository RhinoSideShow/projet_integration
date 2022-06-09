import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";


export default function CreateProject({membre}) {

    const handleonclickTest = () => {

        var today = new Date();
        var dateDebut = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let ProjectCreate = document.getElementById("nom").value
            + " " + document.getElementById("budget").value
            + " " + document.getElementById("desc").value
            + " " + document.getElementById("somm").value
            + " " + dateDebut
        fetch(`http://localhost:3000/api/CrProject?create=${[membre._id, ProjectCreate]}`).then(r => r)
    }


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
                        <input type="text" id="nom" className={styles.Input} placeholder="Nom du projet"/>
                        <br/><br/>
                        <input type="text" id="budget" className={styles.Input} placeholder="Budget"/>
                        <br/><br/>
                        <input type="text" id="desc" className={styles.Input}
                               placeholder="Description courte du projet"/>
                        <br/><br/>
                        <textarea type="text" id="somm" className={styles.InputArea} placeholder="Sommaire du projet"/>
                        <br/><br/>
                        <button className={styles.ButtonProjectCreate}
                                onClick={handleonclickTest}>Soumettre
                        </button>
                        <button className={styles.ButtonProjectCreate} onClick={() => router.push('/Homepage')}>Retour
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}
