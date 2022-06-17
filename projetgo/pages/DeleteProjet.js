import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import {useRef, useState} from "react";

export default function DeleteProjet({projet, membre}) {

    const router = useRouter();

    //envoi les informations receuillis ver le api pour les manipuler avec la bases de donnees
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
                        <div className={styles.DivImageEtTexteDelete}>
                            <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoDelete}/>
                            <h3>Voulez vous vraiment effacer votre projet?</h3></div>
                        <br/><br/>
                        {/* utilise la fonction declare ci dessus au click du button */}
                        <button className={styles.ButtonProjectDelete}
                                onClick={handleOnClick}>Oui
                        </button>
                        {/* Boutton qui envoi vers la page d'acceuil in avec la methode router + l'attribut de l'intstance membre  */}
                        <button className={styles.ButtonProjectDelete} onClick={() => router.push('/')}>Non
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

