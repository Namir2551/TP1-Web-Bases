import React, { useState } from 'react';
import Professeurs from '../pages/Professeurs';
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
    const id = Math.random().toString();
    const donneesProf = {
      id: id,
      dateEmbauche: new Date(saisieDate),
      nom: saisieNom,
      prenom: saisiePrenom,
      photo: "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",
      cours: [],
    };
        if(saisieNom ==="" && saisiePrenom ===""){
      alert("Vous devez saisir un Nom et Prenom")
    }else if (saisieNom ===""){
      alert("Vous devez saisir un Nom")
    }else if(saisiePrenom ===""){
      alert("Vous devez saisir un Prenom")
    }else if(saisieDate ===""){
      alert("Vous devez saisir une Date")
    } else {
      ajouterProfesseur(donneesProf);
      setSaisieNom('');
      setSaisiePrenom('');
      setSaisieDate('');
    }
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
