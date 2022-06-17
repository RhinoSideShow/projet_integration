import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useEffect, useState} from "react";
import Animation_Credit_Don from "./Animation_Credit_Don";

export default function Credit_Don({projet, membre, isClient}) {

    const [plan, setPlan] = useState(projet);
    const [money, setMoney] = useState(0.0);
    const [count, setCount] = useState(0);
    const [nom, setNom] = useState("");
    const [carte, setCarte] = useState("");
    const [code, setCode] = useState("");
    const [month, setMonth] = useState("");
    const [annee, setAnnee] = useState("");
    const [show, setShow] = useState(false);

    // arrow function qui regarde si les champs sont pas vide pour la carte de credit si oui un alert apparait sinon
    // on envoi le projet._id, money, membre._id dans l'api et change show pour true qui cache Credit_Don et appelle
    // Animation_Credit_Don
    const handleShow = () => {

        if(nom === "" || carte === "" || code === "" || month === "" || annee === ""){
            alert("Veuiller entrer tout les informations de votre carte de crédit!")
        }
        else{
            fetch(`http://localhost:3000/api/updateFonds?fonds=${[projet._id, money, membre._id]}`).then(r => r);
            setShow(!show);
        }
    }

    // reload la page 1 fois
    function LoadOnce() {
        if (!window.location.hash) {
            window.location = window.location + '#Loaded';
            window.location.reload();
        }
    }

    return (
        <div onLoad={LoadOnce} id="__next" className={styles.DivContainer}>
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
                                    <span className={styles.SpanCreditDon}>Montant</span>&emsp;
                                    <input className={styles.InputCreditDon}
                                           onChange={e => setMoney(parseFloat(e.target.value))}/><br/><br/>
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
                            <span>&ensp;Numéro de Carte de Crédit</span> &emsp;<span
                            className={styles.SpanCredit}>CVC</span><br/>
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
                        {/* input qui sont disabled qui montre au user combien il va payer (montant + tips = Montant Total)*/}
                        <div>
                            <span>&ensp;Montant</span><span
                            className={styles.SpanCreditTaxes}>&emsp;&ensp;ProjetGo Tips</span><span
                            className={styles.SpanCreditTaxes}>Montant Total</span><br/>

                            <input className={styles.InputCreditTaxes} defaultValue={isNaN(money) ? setMoney(0) : money}
                                   disabled="disabled"/>&ensp;+&ensp;
                            <input className={styles.InputCreditTaxes} defaultValue={money === 0 ? 0 : 5.0}
                                   disabled="disabled"/>&ensp;=&ensp;
                            <input className={styles.InputCreditTaxes}
                                   defaultValue={money === 0 ? 0 : (money + 5.0).toFixed(2) + " CAD"}
                                   disabled="disabled"/>&ensp;
                        </div>
                    </div>
                    {/* Si show = true appel Animation_Credit_Don et cache le bouton Faire un don*/}
                    <div>
                        {show && <Animation_Credit_Don isDon={true} membre={membre} projet={plan} isClient={isClient}/>}
                        <div>
                            {!show &&
                                <button className={styles.ButtonDon} onClick={handleShow}>Faire un don</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}