import {useState} from 'react'
import {useRouter} from 'next/router'
import {mutate} from 'swr'
import styles from "../styles/Home.module.css";
import Head from "next/head";


const FormProjets = ({formid, projetsform, fornewprojet = true}) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({

    _budget : projetsform._budget,
    _createur : projetsform._createur,
    _debut : projetsform._debut,
    _fonds : projetsform._fonds,
    _membres : projetsform._membres,
    _status : projetsform._status,
    _fin : projetsform._fin,
    _titre : projetsform._titre,
    _somm : projetsform._somm,
    _desc : projetsform._desc,


  })


  const putData = async (form) => {
    const {id} = router.query

    try {
      const res = await fetch(`/api/updateProjet/${id}`, {

        method: 'PUT',
        headers: {
          Accept : contentType,
          'Content-Type': contentType,

        },
        body: JSON.stringify(form),
      })

      if (!res.ok){
        throw new Error(res.status)
      }

      const {data} = await res.json()

      mutate(`/api/updateProjet/${id}`, data, false)
      router.push('/')
    }catch (error){
      setMessage()('Failed to update projet')
    }

  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/updateProjet/', {
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

      router.push('/')
    } catch (error) {
      setMessage('Failed to add projet')
    }
  }

  const handleChange = (e) => {
    const target = e.target
   // const value =
     //   target.name === '_benevole' ? target.checked : target.value
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
      forNewProjet ? postData(form) : putData(form)

    } else {
      setErrors({errs})
    }
  }

  const formValidate = () => {
    let err = {}
    if (!form._titre) err._titre = 'Titre is required'
    if (!form._budget) err._budget = 'Budget is required'
    if (!form._desc) err._desc = 'Description is required'
    if (!form._somm) err._somm = 'Sommaire is required'
    return err
  }

  return (
      <>
        <form id={formid} onSubmit={handleSubmit}>

          <input
              type="text"
              className={styles.Input}
              maxLength="60"
              name="_Titre"
              placeholder='Titre'
              value={form._titre}
              onChange={handleChange}
              required
          />

          <input
              type="text"
              className={styles.Input}
              maxLength="60"
              name="_budget"
              placeholder='Budget'
              value={form._budget}
              onChange={handleChange}
              required
          />


          <input
              type="text"
              className={styles.Input}
              maxLength="80"
              name="_desc"
              placeholder='Description courte du projet'
              value={form._desc}
              onChange={handleChange}
              required
          />


          <input
              type="text"
              className={styles.InputArea}
              maxLength="600"
              name="_somm"
              placeholder='Sommaire du projet'
              value={form._somm}
              onChange={handleChange}
              required
          />


          <button className={styles.ButtonProjectCreate} type="submit">
            Soumettre
          </button>
          <button className={styles.ButtonProjectCreate} type="return">
          Retour
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

export default FormProjets


