import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";
import {useRef, useState} from "react";

export default function MotDePasseOublier({membre}) {
    //Declaration des varaibles
    const router = useRouter();
    const inputNewPwd = useRef(null);
    const inputConNewPwd = useRef(null);
    const [nouveau, setNouveau] = useState("");
    const [conNouveau, setConNouveau] = useState("");


    //change le URL quand Mot de passe oublié ? est clicker.
    const handleOnClick = () => {
        //Verifie si le mot de passe entre et egal a la confirmation et renvoi a la page d'acueil
        if(nouveau === conNouveau){
            fetch(`http://localhost:3000/api/updatePwd?motdepasse=${[membre._id,nouveau]}`).then(r => r);
            router.push('/').then(r => r);
        }
        else{
            //Envoi un message d'erreur s'il y a une difference
            alert("La confirmation n'est pas pareil au nouveau mot de passe.");
            inputNewPwd.current.value = "";
            inputConNewPwd.current.value = "";
        }
    }

    return (
        //Page Visible
        <div id="__next" className={styles.DivContainer}>
            <Head>
                <title>ProjetGo</title>
            </Head>
            <div className={styles.DivSousContainer}>
                <div className={styles.DivSousSousContainerSignIn}>
                    <div>
                        <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo} alt="image"/><br/>
                        <h2>Réinitialiser votre mot de passe</h2>
                    </div>
                    <br/>
                    <div>
                        <div>
                            {/*Champ pour entrer le mot de passe*/}
                            <input type="text" ref={inputNewPwd} onChange={e => setNouveau(e.target.value)}
                                   className={styles.InputClient}
                                   placeholder="Nouveau mot de passe"/><br/>
                            {/*Champ POur entrert la confirmation*/}
                            <input type="text" ref={inputConNewPwd} onChange={e => setConNouveau(e.target.value)}
                                   className={styles.InputClient}
                                   placeholder="Confirmation du nouveau mot de passe"/><br/>
                        </div>
                        <div>
                            {/*Bouton pour continuer*/}
                            <button className={styles.ButtonSignIn} onClick={handleOnClick}>Suivant</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}