import Form from '../Components/Form'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";
import {router} from "next/client";

const NewMembre = () => {
    const membreForm = {

        _prenom: '',
        _nom: '',
        _email: '',
        _tel: '',
        _adresse: '',
        _pw: '',
        _benevole: false,
        _status_adhesion: 'attente cotisation',
        _date_adhesion: new Date().toISOString(),
        _admin: false,

    }

    //change le URL quand Mot de passe oublié ? est clicker.
    const handleOnClickConexion = () => {
        router.push('/Sign_In').then(r => r)
    }

    return (
        //Page Visible
        <div id="__next" className={styles.DivContainer}>

            <Head>
                <title>ProjetGo - Creation Membre</title>
            </Head>

            <div className={styles.DivSousContainerNew}>

                <div className={styles.DivSousSousContainerNew}>
                    <div>
                        <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoNewMembre} alt="image"/><br/>
                        <h2>Devenez un membre de ProjetGo</h2>
                    </div>
                    <div>
                        {/*Form pour ajouter membre*/}
                <Form formId="add-membre-form" membreForm={membreForm}/>
                        <div>
                            <p>&emsp;&emsp;Vous avez un compte ?
                                {/*Lien vers page Sign_In*/}
                                <a onClick={handleOnClickConexion}>&ensp;Connectez-vous</a></p>
                            <br/><br/></div>
                    </div>

            </div>
        </div>
</div>
    )

}

export default NewMembre