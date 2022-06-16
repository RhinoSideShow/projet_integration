import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import {useRef, useState} from "react";

export default function DeleteProjet({projet, membre}) {

    const router = useRouter();
    const handleOnClick = () => {

        fetch(`http://localhost:3000/api/removeProjet?delprojet=${[projet._id]}`).then(r => r);
        router.push('/post/membre/' + membre._id);
    }

    return (
        <>
            <div id="__next" className={styles.DivContainer}>
                <Head>
                    <title>Effacez votre projet</title>
                </Head>
                <div className={styles.DivSousContainerCreate}>
                    <div className={styles.DivSousSousContainerCreate}>
                        <div className={styles.DivImageEtTexte}>
                            <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoCreate}/>
                            <h3>Voulez vous vraiment effacer votre projet?</h3></div>
                        <br/><br/>
                        <button className={styles.ButtonProjectCreate}
                                onClick={handleOnClick}>Oui
                        </button>
                        <button className={styles.ButtonProjectCreate} onClick={() => router.push('/')}>Non
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

