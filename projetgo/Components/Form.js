import {useState} from 'react'
import {useRouter} from 'next/router'
import {mutate} from 'swr'
import styles from "../styles/Home.module.css";
import Head from "next/head";




const Form = ({formId, membreForm, forNewMembre = true,}) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const [form, setForm] = useState({
        _nom: membreForm._nom,
        _prenom: membreForm._prenom,
        _email: membreForm._email,
        _tel: membreForm._tel,
        _adresse: membreForm._adresse,
        _date_adhesion: membreForm._date_adhesion,
        _status_adhesion: membreForm._status_adhesion,
        _admin: membreForm._admin,
        _benevole: membreForm._benevole,
        _pw: membreForm._pw,


    })


    /* The PUT method edits an existing entry in the mongodb database. */
    const putData = async (form) => {
        const {id} = router.query

        try {
            const res = await fetch(`/api/membres/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form),
            })

            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error(res.status)
            }

            const {data} = await res.json()

            mutate(`/api/membres/${id}`, data, false) // Update the local data without a revalidation
            router.push('/')
        } catch (error) {
            setMessage('Failed to update membre')
        }
    }

    /* The POST method adds a new entry in the mongodb database. */
    const postData = async (form) => {
        try {
            const res = await fetch('/api/membres', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form),
            })

            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error(res.status)
            }
            //router.push(/[id], as,  /${membre._id})
            //<Link href="/[id]" as={/${membre._id}}>
            alert("Inscription Reussi, veuillez vous connectez")
            router.push('/Sign_In')
        } catch (error) {
            setMessage('Failed to add membre')
        }
    }


    const handleChange = (e) => {
        const target = e.target
        const value =
            target.name === '_benevole' ? target.checked : target.value
        //target.name === 'paymment' ? target.checked : target.value
        const name = target.name


        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = formValidate()
        if (Object.keys(errs).length === 0) {
            forNewMembre ? postData(form) : putData(form)

        } else {
            setErrors({errs})
        }
    }

    /* Makes sure membre info is filled */
    const formValidate = () => {
        let err = {}
        if (!form._prenom) err._prenom = 'Name is required'
        if (!form._nom) err._nom = 'Prenom is required'
        if (!form._email) err._email = 'Email is required'
        if (!form._tel) err._tel = 'Species is required'
        if (!form._adresse) err._adresse = 'Adresse is required'
        return err
    }

    return (
        <>

            <form id={formId} onSubmit={handleSubmit}>

                <input
                    type="text"
                    className={styles.Input}
                    maxLength="60"
                    name="_prenom"
                    placeholder='Prénom'
                    value={form._prenom}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    className={styles.Input}
                    maxLength="60"
                    name="_nom"
                    placeholder='Nom'
                    value={form._nom}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    className={styles.Input}
                    maxLength="80"
                    name="_email"
                    placeholder='Email'
                    value={form._email}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    className={styles.Input}
                    maxLength="30"
                    name="_tel"
                    placeholder='Téléphone'
                    value={form._tel}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    className={styles.Input}
                    maxLength="80"
                    name="_adresse"
                    placeholder='Adresse'
                    value={form._adresse}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className={styles.Input}
                    maxLength="80"
                    name="_pw"
                    placeholder='Mot de passe'
                    value={form._pw}
                    onChange={handleChange}
                />

               <label htmlFor="benevole">Voulez vous etre Bénévole ? </label>
                <input
                    className={styles.Input}
                    type="checkbox"
                    name="_benevole"
                    checked={form._benevole}
                    onChange={handleChange}
                />


                <button className={styles.ButtonSignIn} type="submit">
                    Soumettre
                </button>
            </form>
            <p>{message}</p>
            <div>
                {Object.keys(errors).map((err, index) => (
                    <li key={index}>{err}</li>
                ))}
            </div>
        </>

    )
}

export default Form


