import React, { useState } from 'react';

import FiltreSession from '../components/FiltreSession';
import FormulaireCour from './FormulaireCour';
import './NouveauCour.css';

const NouveauCour = ({ajouterCour}) => {
  const [enEdition, setEnEdition] = useState(false);

  const ouvrirFormulaireHandler = () => {
    setEnEdition(true);
  };

  const fermerFormulaireHandler = () => {
    setEnEdition(false);
  };

  const [filtreAnnee, setFiltreAnnee] = useState();

  const filtrerChangeHandler = (selectedAnnee) => {
    setFiltreAnnee(selectedAnnee);
  };

  return (
    <div className='new-expense'>
      {!enEdition && (
        <button onClick={ouvrirFormulaireHandler}>Ajouter un nouveau Cours</button>
      )}
      {enEdition && (
        <FormulaireCour
          onCancel = {fermerFormulaireHandler}
          ajouterCour = {ajouterCour}
        />
      )}
      <FiltreSession
        selected = {filtreAnnee}
        onChangementFiltre = {filtrerChangeHandler}
      />
    </div>
  );
};

export default NouveauCour;
