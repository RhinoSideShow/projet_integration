import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Confetti from 'react-confetti'

export default function Animation_Credit_Don({isDon, membre, projet, isClient}) {

    const [show, setShow] = useState(false);
    //set le counter a 6 seconde
    const [counter, setCounter] = useState(6);
    const router = useRouter();

    //anneau téléchargement dure 2 secondes
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    //redirection diminue le counter de 1 à chaque seconde
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

        if(!isClient){
            //si membre est undefined
            if (counter === 0 && membre === undefined)
                router.push('/post/projets/' + projet._id).then(r => r);

            //si le membre n'est pas null mais le projet est null
            else if (counter === 0 && membre !== null && projet === null)
                router.push('/post/membre/' + membre._id).then(r => r);

            //si le membre n'est pas null mais le projet n'est null
            else if (counter === 0 && membre !== null && projet !== null)
                router.push('/post/projets/' + projet._id + '&' + membre._id).then(r => r);
        }
        //si isClient = true
        else{
            if (counter === 0)
                router.push('/post/projets/' + projet._id).then(r => r);
        }


        return () => clearInterval(timer);
    }, [counter]);

    //si isDon = true
    if (isDon) {
        return (
            <div>
                <div style={show === true ? {display: 'none'} : {display: 'inline'}}>
                    <Head>
                        <title>ProjetGo</title>
                    </Head>
                    <div className={styles.DivLoading}>
                        <div className={styles.Loading}/>
                    </div>
                </div>
                <div style={show === false ? {display: 'none'} : {display: 'inline'}}>
                    <div className={styles.DivMerci}>
                        <Confetti className={styles.DivConfetti} width={650} height={650}/>
                        <h1>Merci pour votre donation.</h1>
                        <div>
                            <img src="/Image_Credit/Merci.jpg"/>
                        </div>
                        <br/><br/>
                        <div>
                            <h3>Redirection dans {counter}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    //si isDon = false
    else {
        return (
            <div>
                <div style={show === true ? {display: 'none'} : {display: 'inline'}}>
                    <Head>
                        <title>ProjetGo</title>
                    </Head>
                    <div className={styles.DivLoading}>
                        <div className={styles.Loading}/>
                    </div>
                </div>
                <div style={show === false ? {display: 'none'} : {display: 'inline'}}>
                    <div className={styles.DivMerci}>
                        <Confetti className={styles.DivConfetti} width={650} height={650}/>
                        <h1>Cotisation payée.</h1>
                        <br/><br/>
                        <div>
                            <h3>Redirection dans {counter}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}