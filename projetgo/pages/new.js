import Form from '../Components/Form'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";



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



    return (
        <div id="__next" className={styles.DivContainerHome}>
            <Head>
                <title>ProjetGo - Creation Membre</title>
            </Head>

            <br/><br/>
            <br/><br/>
            <div className={styles.DivContainer}>
            <div className={styles.DivSousContainerNew}>

                <div className={styles.DivSousSousContainerNew}>
                    <div>
                        <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogoNewMembre} alt="image"/><br/>
                        <h2>Devenez un memebre de ProjetGo</h2>
                    </div>
                    <div>
                <Form formId="add-membre-form" membreForm={membreForm}/>
                    </div>
                </div>
            </div>
        </div>
</div>
    )

}

export default NewMembre
