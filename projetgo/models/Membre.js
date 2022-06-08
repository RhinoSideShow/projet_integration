import mongoose from 'mongoose';


/* MembreSchema will correspond to a collection in your MongoDB database. */
const MembreSchema = new mongoose.Schema({
  _prenom: {

    type: String,
    required: [true, 'Entrez un nom .'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },

  _nom: {

    type: String,
    required: [true, 'Entrez le prénom .'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },


  _email: {

    type: String,
    required: [true, "Entrez le Email"],
    maxlength: [80, "Email cannot be more than 60 characters"],
  },

  _tel: {

    type: String,
    required: [true, 'Entrez le numero de tel.'],
    maxlength: [60, 'Tel cannot be more than 40 characters'],
  },
  _adresse: {

    type: String,
  },
  _benevole: {
    /* Boolean benevole value */

    type: Boolean,
  },

  _pw: {
    /* Boolean payment value */

    type: Boolean,
  },
  _date_adhesion: {

    type: Date,
  },

  _status_adhesion: {

    type: String,
    required: [true, 'Entrez le numero de tel.'],
    maxlength: [60, 'Tel cannot be more than 40 characters'],
  },
  _admin: {

    type: Boolean,

  },
})

export default mongoose.models.Membre || mongoose.model('Membre', MembreSchema)
