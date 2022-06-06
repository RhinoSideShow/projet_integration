import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";

export default function SinIn() {

    const router = useRouter();

    //change le URL quand Mot de passe oublié ? est clicker.
    const handleOnClickPasDeCompte = () =>{
        router.push('/').then(r => r)
    }

    //change URl quand Vous n'avez pas de compte ? Inscrivez-vous est clicker.
    const handleOnClickMPOublier = () =>{
        router.push('/').then(r => r)
    }

    return (
        <div id="__next" className={styles.DivContainer}>
            <Head>
                <title>ProjetGo</title>
            </Head>
            <div className={styles.DivSousContainer}>
                <div className={styles.DivSousSousContainerSignIn}>
                    <div>
                        <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo} alt ="image"/><br/>
                        <h2>Connectez-vous à ProjetGo</h2>
                    </div>
                    <br/>
                    <div>

                        <input type="text" className={styles.Input} placeholder="Adresse Email"/>
                        <br/><br/>

                        <input type="password" className={styles.Input} placeholder="Mot de Passe"/>
                        &emsp;<a onClick={handleOnClickMPOublier}>Mot de passe oublié ?</a>
                        <br/><br/><br/><br/>
                    </div>
                    <div>
                        <button className={styles.ButtonSignIn} onClick={() => router.push('/Credit_Cotisation')}>Suivant</button>
                        <p>&emsp;&emsp;Vous n'avez pas de compte ?<a onClick={handleOnClickPasDeCompte}>&ensp;Inscrivez-vous</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}