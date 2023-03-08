import React, { useState } from 'react';

import FiltreSession from '../components/FiltreSession';
import FormulaireCour from './FormulaireCour';
import './NouveauCour.css';

const NouveauCour = ({ajouterCour}) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerCourHandler = (courSaisie) => {
    const donneesCour = {
      ...courSaisie,
      id: Math.random().toString(),
    };
    ajouterCour.onAddExpense(donneesCour);
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
        <button onClick={debutEditionHandler}>Ajouter Nouveau Cour</button>
      )}
      {enEdition && (
        <FormulaireCour
          onSaveExpenseData={enregistrerCourHandler}
          onCancel={arretEditionHandler}
          ajouterCour = {ajouterCour}
        />
      )}
      <FiltreSession>
        selected={FiltreSession}
      </FiltreSession>
    </div>
  );
};

export default NouveauCour;
