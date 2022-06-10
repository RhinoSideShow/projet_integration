import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";


export default function Conditions() {
    return (
        <>
            <div id="__next" className={styles.DivContainerHome}>
                <Navbar/>
                <div className={styles.DivImageCondition}>
                    <img className={styles.ImageCondition} src="/Image_Tos/cookies.png" alt="nope"/>
                </div>
                <div className={styles.DivContainerTOS}>
                    <div className={styles.DivSousContainerTOS}>
                        <div className={styles.DivSousSousContainerTOS}>
                            <div>
                                <div>
                                    <h1 style={{fontSize: 100}}>Comment sont utilisé les cookies sur ProjetGo ?</h1>
                                </div>
                                <br/>
                                <div>
                                    <p style={{fontSize: 20}}>Les cookies et les technologies similaires, comme les
                                        pixels et le stockage local vous fournissent une expérience optimisée, accélérée
                                        et plus sécurisée sur ProjetGo. Les cookies sont également utilisés pour gérer
                                        nos services, ce qui inclut nos sites Web, applications, APIs, pixels,
                                        intégrations, et communications par email. Plus précisément, ProjetGo utilise
                                        ces
                                        technologies pour :
                                        <br/><br/>
                                        <ul>
                                            <li>Conserver votre connexion sur ProjetGo.</li>
                                            <li>Délivrer des fonctionnalités et contenus des services ProjetGo.</li>
                                            <li>Sauvegarder et respecter vos préférences.</li>
                                            <li>Personnaliser le contenu que vous visualisez.</li>
                                            <li>Vous protéger des spams et des comportements inappropriés.</li>
                                        </ul>
                                    </p>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <br/>
                                    <h1 style={{fontSize: 50}}>Que sont les cookies, les pixels et le stockage local
                                        ?</h1>
                                    <p style={{fontSize: 20}}><span style={{fontWeight: "bold"}}>Les cookies</span> sont
                                        de petits fichiers placés sur votre
                                        ordinateur lorsque vous naviguez sur le Web ou utilisez des applications Web.
                                        Nous utilisons les cookies pour gérer nos services, savoir comment nos services
                                        sont utilisés, comprendre comment les optimiser, et plus encore. Voir ci-dessus
                                        pour d'autres exemples sur la manière dont nous utilisons les cookies.<br/><br/>

                                        <span style={{fontWeight: "bold"}}>Les pixels</span> correspondent à une petite
                                        quantité de code placée sur une page Web,
                                        une application Web ou dans un email. Nous utilisons des pixels, dont certains
                                        sont fournis aux annonceurs pour être placés sur leurs sites web pour savoir si
                                        vous avez interagi avec un contenu Web ou email spécifique — comme de nombreux
                                        autres services le font. Cela nous aide ainsi à analyser et améliorer nos
                                        services et personnaliser votre expérience, notamment les publicités et les
                                        contenus que vous voyez.<br/><br/>

                                        Nous utilisons <span style={{fontWeight: "bold"}}>le stockage local</span> pour
                                        sauvegarder des données sur votre
                                        ordinateur ou sur votre appareil mobile. Nous utilisons les données du stockage
                                        local pour permettre la navigation sur le Web, maintenir les préférences du
                                        lecteur vidéo, personnaliser ce qui vous est montré selon vos interactions
                                        passées avec nos services, se souvenir de vos préférences et mesurer la
                                        performance des publicités. Nous pouvons également utiliser le stockage local
                                        sur d’autres sites web, lorsque cela est nécessaire pour vous fournir certaines
                                        fonctionnalités, afin d'obtenir des informations concernant vos visites sur ces
                                        sites.</p>

                                    <br/>
                                    <h1 style={{fontSize: 50}}>Pourquoi ces technologies sont‑elles utilisées par nos
                                        services ?</h1>
                                    <p style={{fontSize: 20}}>Les cookies, les pixels et le stockage local permettent de
                                        gérer, de financer notre activité, et de vous fournir une expérience améliorée.
                                        Ils sont utilisés dans les catégories suivantes :
                                        <br/><br/>
                                    <ul>
                                        <li>Authentification et sécurité</li>
                                        <li>Fonctionnalité</li>
                                        <li>Préférences de l'utilisateur</li>
                                        <li>Statistiques</li>
                                        <li>Recherche et développement</li>
                                        <li>Contenu personnalisé</li>
                                    </ul>
                                    </p>
                                    <br/>
                                    <hr/>
                                    <br/><br/>
                                    <div>
                                        <div style={{textAlign: "center"}}>
                                            <a style={{paddingRight: 50}} href="/Conditions">Condition
                                                d'utilisation</a>&emsp;
                                            <a style={{paddingRight: 50}} href="/Politique">Politique de
                                                Confidentialité</a>&emsp;
                                            <a style={{paddingRight: 50}} href="/Cookies">Cookies</a>
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