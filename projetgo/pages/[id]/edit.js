import {useRouter} from 'next/router'
import useSWR from 'swr'
import Form from '../../components/Form'
import styles from "../../styles/Home.module.css";
import Navbar from "../../Components/Navbar";

const fetcher = (url) =>
    fetch(url)
        .then((res) => res.json())
        .then((json) => json.data)

const EditMembre = () => {
    const router = useRouter()
    const {id} = router.query
    const {data: membre, error} = useSWR(id ? `/api/membres/${id}` : null, fetcher)

    if (error) return <p>Failed to load</p>
    if (!membre) return <p>Loading...</p>

    const membreForm = {
        _prenom: membre._prenom,
        _nom: membre._nom,
        _email: membre._email,
        _tel: membre._tel,
        _adresse: membre._adresse,
        _benevole: membre._benevole,
        _pw: membre._pw,
        _status_adhesion: membre._status_adhesion,
        _date_adhesion: membre._date_adhesion,
        _admin: membre._admin,

    }

    return (
        <>
        <div id="__next" className={styles.DivContainerEdit}>

            <div className={styles.DivSousContainerProjet}>

                <Navbar/>
            <div className={styles.DivContainerEdit}>


                    <div className={styles.DivSousSousContainerEdit}>
                        <h1>Editer Votre Compte</h1>
                        <Form formId="edit-membre-form" membreForm={membreForm} forNewMembre={false}/>
                    </div>

            </div>
            </div>
        </div>
        </>
    )

}

export default EditMembre
