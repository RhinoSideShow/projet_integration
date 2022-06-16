import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import {useRouter} from "next/router";

export default function CommentCaMarche() {

    const router = useRouter();

    const handleOnClick = () => {router.push('/new').then(r => r)}

    return (
        <>
            <div id="__next" className={styles.DivContainerHome}>
                <Navbar/>
                <div className={styles.DivImageCondition}>
                    <img className={styles.ImageCondition} src="/Image_CommentCaMarche/CommentCaMarche.png" alt="nope"/>
                </div>
                <div className={styles.DivContainerTOS}>
                    <div className={styles.DivSousContainerTOS}>
                        <div className={styles.DivSousSousContainerTOS}>
                            <div>
                                <div>
                                    <h1 style={{fontSize: 100}}>ProjetGo</h1>
                                    <p style={{fontSize: 80}}>Comment ça marche ?</p>
                                </div>
                                <br/>
                                <div>
                                    <h1 style={{fontSize: 50}}>1. Crée toi un compte</h1>
                                    <p style={{fontSize: 20}}> - Cotise pour devenir membre</p>
                                    <p style={{fontSize: 20}}> - Tu peux être bénévole</p>
                                    <p style={{fontSize: 20}}> - Et encore plus !</p>
                                    <br/>
                                    <h1 style={{fontSize: 50}}>2. Crée ton projet </h1>
                                    <p style={{fontSize: 20}}> - Définis le budget de ton projet</p>
                                    <p style={{fontSize: 20}}> - Ajoute une courte description</p>
                                    <p style={{fontSize: 20}}> - Écrit un sommaire du projet</p>
                                    <br/>
                                    <h1 style={{fontSize: 50}}>3. Tout le monde peut t'encourager</h1>
                                    <p style={{fontSize: 20}}> - Tout les utilisateurs peuvent donner </p>
                                    <p style={{fontSize: 20}}> - Les membres et les bénévoles peuvent s'abonner aux projets </p>
                                    <p style={{fontSize: 20}}> - Parle de ton projet à tes proches </p>
                                    <br/>
                                    <h1 style={{fontSize: 50}}>Projet Go </h1>
                                    <p style={{fontSize: 20}}> ProjetGo est un organisme à but non lucratif qui aide les communautés à monter des projets collectifs au
                                        Québec, ailleurs au Canada et à l’étranger. Au fond de nous, nous rêvons tous d’un monde meilleur.
                                        Nous espérons encourager la communauté à aider son prochain. Projet Go,
                                        facilite les donations pour des projets humanitaire et communautaire.
                                        Une façon simple et rapide de contribuer à un grand pas vers un monde d’entraide.  </p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div>
                                        <div style={{textAlign:"center"}}>
                                            <a style={{paddingRight:50}} href="/Sign_In">Connexion</a>&emsp;
                                            <a style={{paddingRight:50}} onClick={handleOnClick}>Inscrivez vous </a>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}