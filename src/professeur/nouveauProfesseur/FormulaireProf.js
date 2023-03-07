import React, { useState } from 'react';

import './FormulaireProf.css';

const FormulaireProf = ({ajouterProfesseur}) => {
  const [saisieNom, setSaisieNom] = useState('');
  const [saisiePrenom, setSaisiePrenom] = useState('');
  const [saisieDate, setSaisieDate] = useState('');


  const changementNomHandler = (event) => {
    setSaisieNom(event.target.value);
  };

  const changementPrenomHandler = (event) => {
    setSaisiePrenom(event.target.value);
  };

  const changementDateHandler = (event) => {
    setSaisieDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const donneesProf = {
      id: "p3",
      dateEmbauche: new Date(saisieDate),
      nom: saisieNom,
      prenom: saisiePrenom,
      photo: "https://4.bp.blogspot.com/-oX5MCM16YoQ/Wh8RrLwG4EI/AAAAAAABNUg/QltezsjmUHEACRGjct7MG12JFRvMX38qwCKgBGAs/s1600/CastleCreator_Fluttershy5.png",
      cours: [],
    };
    ajouterProfesseur(donneesProf);
    setSaisieNom('');
    setSaisiePrenom('');
    setSaisieDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Nom</label>
          <input
            type='text'
            value={saisieNom}
            onChange={changementNomHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Prenom</label>
          <input
            type='text'
            value={saisiePrenom}
            onChange={changementPrenomHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date d'embauche</label>
          <input
            type='date'
            value={saisieDate}
            onChange={changementDateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={ajouterProfesseur.onCancel}>Annuler</button>
        <button type='submit'>Ajouter Prof</button>
      </div>
    </form>
  );
};

export default FormulaireProf;
