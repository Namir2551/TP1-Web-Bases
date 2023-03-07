import React, { useState } from 'react';

import './FormulaireProf.css';

const FormulaireProf = (props) => {
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
      nom: saisieNom,
      prenom: saisiePrenom,
      date: new Date(saisieDate),
    };

    props.onSaveExpenseData(donneesProf);
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
            type='number'
            min='0.01'
            step='0.01'
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
        <button type="button" onClick={props.onCancel}>Annuler</button>
        <button type='submit'>Ajouter Prof</button>
      </div>
    </form>
  );
};

export default FormulaireProf;
