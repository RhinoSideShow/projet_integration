import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useState} from "react";
import Animation_Credit_Don from "./Animation_Credit_Don";
import {useRouter} from "next/router";

export default function Credit_Cotisation({membre}) {

    const [argent, setArgent] = useState(120.0);
    const [user, setUser] = useState(membre);
    const [nom, setNom] = useState("");
    const [carte, setCarte] = useState("");
    const [code, setCode] = useState("");
    const [month, setMonth] = useState("");
    const [annee, setAnnee] = useState("");
    const [show, setShow] = useState(false);
    const router = useRouter();

    //change la page pour Homepage
    const handleOnClickPlustard = () => {
        router.push('/post/membre/' + membre._id).then(r => r)
    }

    // arrow function qui regarde si les champs sont pas vide pour la carte de credit si oui un alert apparait sinon
    // on envoi le projet._id, money, membre._id dans l'api et change show pour true qui cache Credit_Cotisation et appelle
    // Animation_Credit_Don
    const handleShow = () => {
        if (nom === "" || carte === "" || code === "" || month === "" || annee === "")
            alert("Veuiller entrer tout les informations de votre carte de crédit!")
        else{
            fetch(`http://localhost:3000/api/updateStatut?cotisation=${membre._id}`).then(r => r)
            setShow(!show);
        }
    }

    return (
        <div id="__next" className={styles.DivContainer}>
            <Head>
                <title>ProjetGo</title>
            </Head>
            <div className={styles.DivSousContainer}>
                <div className={styles.DivSousSousContainerSignIn}>
                    {/*Si show est true le div disparait sinon il aparait*/}
                    <div style={show === true ? {display: 'none'} : {display: 'inline'}}>
                        <div>
                            {/*Logo avec le input pour le montant du don*/}
                            <div>
                                <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo}/>
                                <div className={styles.DivInputCreditDon}>
                                    <span className={styles.SpanCreditCotisation}>Cotisation Annuelle</span>&emsp;
                                </div>
                            </div>
                        </div>
                        <br/>
                        {/* input pour le nom du titulaire sur la carte de crédit*/}
                        <div>
                            <span>&ensp;Nom du titulaire</span><br/>
                            <input className={styles.InputCredit} onChange={e => setNom(e.target.value)}/><br/><br/>
                        </div>
                        {/* input pour le numéro et le CVC de la carte de crédit*/}
                        <div>
                            <span>&ensp;Numéro de Carte de Crédit</span> &emsp;<span className={styles.SpanCredit}>CVC</span><br/>
                            <input className={styles.InputCreditNum} onChange={e => setCarte(e.target.value)}/>&ensp;
                            <input className={styles.InputCreditCodeSecurite} onChange={e => setCode(e.target.value)}/><br/><br/>
                        </div>
                        {/* input pour le mois et l'année de la carte de crédit*/}
                        <div>
                            <span>&ensp;Date d'expiration</span><br/>
                            <input className={styles.InputCreditDate} placeholder="MM" onChange={e => setMonth(e.target.value)}/>&ensp;

                            <span> / </span>&ensp;
                            <input className={styles.InputCreditDate} placeholder="YY" onChange={e => setAnnee(e.target.value)}/><br/><br/>
                        </div>
                        {/* input qui sont disabled qui montre au user combien il va payer (montant + taxes = Montant Total)*/}
                        <div>
                            <span>&ensp;Cotisation annuelle</span><span className={styles.SpanCreditTaxesCotisation}>Taxes&emsp;&ensp;</span>&emsp;&emsp;
                            <span className={styles.SpanCreditTaxesCotisation}>&emsp;&emsp;Montant Total</span><br/>

                            <input className={styles.InputCreditTaxes} defaultValue={argent}
                                   disabled="disabled"/>&ensp;+&ensp;
                            <input className={styles.InputCreditTaxes} defaultValue={argent * 0.15}
                                   disabled="disabled"/>&ensp;=&ensp;
                            <input className={styles.InputCreditTaxes}
                                   defaultValue={argent * 1.15.toFixed(2) + " $"} disabled="disabled"/>&ensp;
                        </div>
                    </div>
                    {/* Si show = true appel Animation_Credit_Don et cache le bouton Payer et Payer plus tard le bouton
                    payer onclick va dans la fonction handleShow et le boutton Payer plus tard onclick va dans la fonction
                    handleonClickPlustard*/}
                    <div>
                        {show && <Animation_Credit_Don isDon={false} membre={user} projet={null} isClient={false}/>}
                        <div>
                            {!show &&
                                <button className={styles.ButtonDon} onClick={handleShow}>Payer {argent * 1.15.toFixed(2) + " $"}</button>}
                            {!show && <p><a className={styles.DivPlusTard} onClick={handleOnClickPlustard}>Payer plus tard</a></p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}