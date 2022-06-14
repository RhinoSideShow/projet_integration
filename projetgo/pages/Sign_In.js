import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";
import clientPromise from "../lib/mongodb";
import {useRef, useState} from "react";

export default function SinIn({utilisateur}) {

    const router = useRouter();
    const inputEmail = useRef(null);
    const inputPwd = useRef(null);
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    let isTrue = false;

    //change le URL quand Mot de passe oublié ? est clicker.
    const handleOnClickPasDeCompte = () => {
        router.push('/new').then(r => r)
    }

    //change URl quand Vous n'avez pas de compte ? Inscrivez-vous est clicker.
    const handleOnClickMPOublier = () => {

        let isVrai = false;
        let code = "";

        for (let i = 0; i < utilisateur.length; i++) {
            if (email === utilisateur[i]._email) {
                isVrai = true;
                code = utilisateur[i]._id;
                break;
            }
        }

        if(isVrai){
            return router.push('/post/motdepasse/' + code).then(r => r)
        }
        else
            alert("Veuiller entrer votre adresse email dans la boite de saisie Adresse Email");

    }

    function LoadOnce() {
        if (!window.location.hash) {
            window.location = window.location;
            window.location.reload();
        }
    }

    const isExist = () => {

        let id = "";

        for (let i = 0; i < utilisateur.length; i++) {
            if (email.valueOf() === (utilisateur[i]._email).valueOf() && motDePasse.valueOf() === (utilisateur[i]._pw).valueOf()) {
                id = utilisateur[i]._id;
                isTrue = true;
                break;
            }
        }

        if (isTrue) {
            console.log(id)
            return router.push('/post/membre/' + id).then(r => r);
        } else {
            alert("Email ou Mot de passe incorrect!" + email + motDePasse + isTrue);

        }
        inputEmail.current.value = "";
        inputPwd.current.value = "";
        isTrue = false;
    }

    return (

        <div onLoad={LoadOnce} id="__next" className={styles.DivContainer}>
            <Head>
                <title>ProjetGo</title>
            </Head>
            {utilisateur && (
                <div className={styles.DivSousContainer}>
                    <div className={styles.DivSousSousContainerSignIn}>
                        <div>
                            <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo} alt="image"/><br/>
                            <h2>Connectez-vous à ProjetGo</h2>
                        </div>
                        <br/>
                        <div>
                            <input type="text" ref={inputEmail} onChange={e => setEmail(e.target.value)}
                                   className={styles.InputClient}
                                   placeholder="Adresse Email"/>
                            <br/><br/>

                            <input type="password" ref={inputPwd} onChange={e => setMotDePasse(e.target.value)}
                                   className={styles.InputClient} placeholder="Mot de Passe"/>
                            &emsp;<a onClick={handleOnClickMPOublier}>Mot de passe oublié ?</a>
                            <br/><br/><br/><br/>
                            <div>
                                <button className={styles.ButtonSignIn} onClick={isExist}>Suivant</button>
                                <p>&emsp;&emsp;Vous n'avez pas de compte ?<a
                                    onClick={handleOnClickPasDeCompte}>&ensp;Inscrivez-vous</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {

    const client = await clientPromise;
    const db = client.db("projet_go");

    const data = await db.collection("membres").find({}).toArray();
    const utilisateur = JSON.parse(JSON.stringify(data));

    return {
        props: {utilisateur},
    }
}