import React, { useState } from 'react';

import FormulaireProf from './FormulaireProf';
import './NouveauProf.css';

const NouveauProf = ({ajouterProfesseur}) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerProfHandler = (profSaisie) => {
    const donneesProf = {
      ...profSaisie,
      id: Math.random().toString(),
    };
    ajouterProfesseur.onAddExpense(donneesProf);
    setEnEdition(false);
  };

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

  return (
    <div className='new-expense'>
      {!enEdition && (
        <button onClick={debutEditionHandler}>Ajouter Nouveau Prof</button>
      )}
      {enEdition && (
        <FormulaireProf
          onSaveExpenseData={enregistrerProfHandler}
          onCancel={arretEditionHandler}
          ajouterProfesseur = {ajouterProfesseur}
        />
      )}
    </div>
  );
};

export default NouveauProf;
