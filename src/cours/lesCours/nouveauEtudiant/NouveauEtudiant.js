import React, { useState } from 'react';

import FormulaireEtudiant from './FormulaireEtudiant';
import './NouveauEtudiant.css';

const NouveauEtudiant = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerEtudiantHandler = (etudiantSaisie) => {
    const donneesEtudiant = {
      ...etudiantSaisie,
      id: Math.random().toString(),
    };
    props.onAddExpense(donneesEtudiant);
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
        <button onClick={debutEditionHandler}>Ajouter Nouveau Etudiant</button>
      )}
      {enEdition && (
        <FormulaireEtudiant
          onSaveExpenseData={enregistrerEtudiantHandler}
          onCancel={arretEditionHandler}
        />
      )}
    </div>
  );
};

export default NouveauEtudiant;
