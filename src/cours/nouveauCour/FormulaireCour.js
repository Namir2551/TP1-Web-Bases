import React, { useState } from 'react';
import './FormulaireCour.css';

const FormulaireCour = ({ajouterCour}) => {
  const [saisieTitre, setSaisieTitre] = useState('');
  const [saisieDiscipline, setSaisieDiscipline] = useState('');
  const [saisieNbMax, setSaisieNbMax] = useState('');
  const [saisieDateDebut, setSaisieDateDebut] = useState('');
  const [saisieDateFin, setSaisieDateFin] = useState('');


  const changementTitreHandler = (event) => {
    setSaisieTitre(event.target.value);
  };

  const changementDisciplineHandler = (event) => {
    setSaisieDiscipline(event.target.value);
  };

  const changementNbMaxHandler = (event) => {
    setSaisieNbMax(event.target.value);
  };

  const changementDateDebutHandler = (event) => {
    setSaisieDateDebut(event.target.value);
  };

  const changementDateFinHandler = (event) => {
    setSaisieDateFin(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const id = Math.random().toString();
    const donneesCour = {
      id: id,
      titre: saisieTitre,
      discipline: saisieDiscipline,
      nbMaxEtu: saisieNbMax,
      dateDebut: new Date(saisieDateDebut),
      dateFin: new Date(saisieDateFin),
    };
    if(saisieTitre ==="" && saisieDiscipline ==="" && saisieNbMax  ==="" && saisieDateDebut ==="" && saisieDateFin ===""){
      alert("Vous devez saisir toutes les champs")
    }else if (saisieTitre ===""){
      alert("Vous devez saisir un Tire de cours")
    }else if(saisieDiscipline ===""){
      alert("Vous devez saisir une Discipline")
    }else if(saisieNbMax ===""){
      alert("Vous devez saisir un nombre d'etudiant")
    }else if (saisieDateDebut ==="" || saisieDateFin ===""){
      alert("Vous devez saisir une date")
    } else {

      ajouterCour(donneesCour);
      setSaisieTitre('');
      setSaisieDiscipline('');
      setSaisieNbMax('');
      setSaisieDateDebut('');
      setSaisieDateFin('');
    }
    };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Titre</label>
          <input
            type='text'
            value={saisieTitre}
            onChange={changementTitreHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Discipline</label>
          <input
            type='text'
            value={saisieDiscipline}
            onChange={changementDisciplineHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Nombre d'étudiant maximum</label>
          <input
            type='text'
            value={saisieNbMax}
            onChange={changementNbMaxHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date de début</label>
          <input
            type='date'
            value={saisieDateDebut}
            min='2023-01-01'
            max='2023-06-06'
            onChange={changementDateDebutHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date de fin</label>
          <input
            type='date'
            value={saisieDateFin}
            min='2023-01-01'
            max='2023-06-06'
            onChange={changementDateFinHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={ajouterCour.onCancel}>Annuler</button>
        <button type='submit'>Ajouter Cour</button>
      </div>
    </form>
  );
};

export default FormulaireCour;
