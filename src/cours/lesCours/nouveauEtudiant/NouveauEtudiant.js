import React, { useState } from 'react';

import FormulaireEtudiant from './FormulaireEtudiant';
import './NouveauEtudiant.css';

const NouveauEtudiant = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const ouvrirFormulaireHandler = () => {
    setEnEdition(true);
  };

  const fermerFormulaireHandler = () => {
    setEnEdition(false);
  };

  return (
    <div className='new-expense'>
      {!enEdition && (
        <button onClick={ouvrirFormulaireHandler}>Ajouter Nouveau Etudiant</button>
      )}
      {enEdition && (
        <FormulaireEtudiant
          onCancel={fermerFormulaireHandler}
        />
      )}
    </div>
  );
};

export default NouveauEtudiant;
