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
            <Navbar/>
            <div className={styles.DivContainer}>
                <div className={styles.DivSousContainer}>
                    <div className={styles.DivSousSousContainerSignIn}>
                        <Form formId="add-membre-form" membreForm={membreForm}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewMembre
