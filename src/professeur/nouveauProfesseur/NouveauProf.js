import React, { useState } from 'react';

import FormulaireProf from './FormulaireProf';
import './NouveauProf.css';

const NouveauProf = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerProfHandler = (profSaisie) => {
    const donneesProf = {
      ...profSaisie,
      id: Math.random().toString(),
    };
    props.onAddExpense(donneesProf);
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
        <button onClick={debutEditionHandler}>Ajouter Nouveau prof</button>
      )}
      {enEdition && (
        <FormulaireProf
          onSaveExpenseData={enregistrerProfHandler}
          onCancel={arretEditionHandler}
        />
      )}
    </div>
  );
};

export default NouveauProf;
