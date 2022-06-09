import FormProjet from '../Components/FormProjet'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";

const NewProjet = () => {
    const projetForm = {

        _budget: '',
        _createur: '',
        _debut: new Date().toISOString(),
        _fonds: '',
        _membres: '',
        _status: true,
        _fin: new Date().toISOString(),
        _titre: '',
        _somm: '',

    }

    return (
        <div id="__next" className={styles.DivContainerHome}>
            <Navbar/>
            <div className={styles.DivContainer}>
            <div className={styles.DivSousContainer}>

                <div className={styles.DivSousSousContainerSignIn}>
                <FormProjet formId="add-projet-form" projetForm={projetForm}/>
                </div>
            </div>
        </div>
</div>
    )

}

export default NewProjet
