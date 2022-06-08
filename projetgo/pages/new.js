import Form from '../components/Form'

const NewMembre = () => {
  const membreForm = {

    _prenom: '',
    _nom: '',
    _email: '',
    _tel: '',
    _adresse: '',
    _benevole: false,
    _pw: '',
    _status_adhesion:'',
    _date_adhesion: '',
    _admin:false

  }

  return <Form formId="add-membre-form" membreForm={membreForm} />
}

export default NewMembre
