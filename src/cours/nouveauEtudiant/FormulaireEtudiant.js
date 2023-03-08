import React, { useState } from 'react';

import './FormulaireEtudiant.css';

const FormulaireEtudiant = (props) => {
  const [saisieNom, setSaisieNom] = useState('');
  const [saisiePrenom, setSaisiePrenom] = useState('');
  const [saisieNumAdmission, setSaisieNumAdmission] = useState('');


  const changementNomHandler = (event) => {
    setSaisieNom(event.target.value);
  };

  const changementPrenomHandler = (event) => {
    setSaisiePrenom(event.target.value);
  };

  const changementNumAdmissionHandler = (event) => {
    setSaisieNumAdmission(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const donneesEtudiant = {
      nom: saisieNom,
      prenom: saisiePrenom,
      numAdmission: saisieNumAdmission,
    };

    props.onSaveExpenseData(donneesEtudiant);
    setSaisieNom('');
    setSaisiePrenom('');
    setSaisieNumAdmission('');
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
          <label>NumAdmission</label>
          <input
            type='text'
            value={saisieNumAdmission}
            onChange={changementNumAdmissionHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Annuler</button>
        <button type='submit'>Ajouter Etudiant</button>
      </div>
    </form>
  );
};

export default FormulaireEtudiant;
