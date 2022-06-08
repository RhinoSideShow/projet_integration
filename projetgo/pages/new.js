import Form from '../components/Form'
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
        _benevole: false,
        _pw: '',
        _status_adhesion: '',
        _date_adhesion: '',
        _admin: false

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
