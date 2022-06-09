import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";
import {useRef, useState} from "react";

export default function InformationClient({projets , clients}) {

    const router = useRouter();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [adresse, setAdresse] = useState("");


    //change le URL quand Mot de passe oublié ? est clicker.
    const handleOnClick = () => {

        let isTrue = false;

        for (let i = 0; i < clients.length; i++) {
            if (email === clients[i]._email) {
                isTrue = true;
                break;
            }
        }

        if (isTrue) {
            alert("same");
            return router.push('/post/fonds/' + projets._id).then(r => r);
        } else {
            fetch(`http://localhost:3000/api/CreateClient?client=${[nom,prenom,email,tel,adresse]}`).then(r => r);

            return router.push('/post/fonds/' + projets._id).then(r => r);
        }

    }

    return (

        <div id="__next" className={styles.DivContainer}>
            <Head>
                <title>ProjetGo</title>
            </Head>
            <div className={styles.DivSousContainer}>
                <div className={styles.DivSousSousContainerSignIn}>
                    <div>
                        <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo} alt="image"/><br/>
                        <h2>Information pour votre Donation</h2>
                    </div>
                    <br/>
                    <div>
                        <div>
                            <input type="text" onChange={e => setNom(e.target.value)}
                                   className={styles.InputClient}
                                   placeholder="Nom"/><br/>

                            <input type="text" onChange={e => setPrenom(e.target.value)}
                                   className={styles.InputClient}
                                   placeholder="Prénom"/><br/>

                            <input type="text" onChange={e => setEmail(e.target.value)}
                                   className={styles.InputClient} placeholder="Email"/><br/>

                            <input type="text" onChange={e => setTel(e.target.value)}
                                   className={styles.InputClient} placeholder="Numéro de Téléphone"/><br/>

                            <input type="text" onChange={e => setAdresse(e.target.value)}
                                   className={styles.InputClient} placeholder="Adresse"/><br/>
                        </div>
                        <div>
                            <button className={styles.ButtonSignIn} onClick={handleOnClick}>Suivant</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}