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

    //change le URL quand Mot de passe oublié ? est clicker.
    const handleOnClickPasDeCompte = () => {
        router.push('/new').then(r => r)
    }

    //change URl quand Vous n'avez pas de compte ? Inscrivez-vous est clicker.
    const handleOnClickMPOublier = () => {
        router.push('/').then(r => r)
    }


    const isExist = () => {

        let isTrue = false;
        let id = "";

        for (let i = 0; i < utilisateur.length; i++) {
            if (email === utilisateur[i]._email && motDePasse === utilisateur[i]._pw) {
                isTrue = true;
                id = utilisateur[i]._id;
                break;
            }
        }

        if (isTrue) {
            return router.push('/post/membre/' + id).then(r => r);
        } else {
            alert("Email ou Mot de passe incorrect!");
        }
        inputEmail.current.value = "";
        inputPwd.current.value = "";
    }

    return (

        <div id="__next" className={styles.DivContainer}>
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