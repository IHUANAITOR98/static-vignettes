import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Control from '../components/Control.jsx';
import Deck1 from '../components/Deck1.jsx';
import Deck2 from '../components/Deck2.jsx';
import Deck3 from '../components/Deck3.jsx';

const SurveyPage = () => {
  const navigate = useNavigate();

  const components = [Deck1, Deck2, Deck3];
  let deck = 0;

  // 2. Select a random index on initialization
  const [RandomComponent] = useState(() => {
    const randomIndex = Math.floor(Math.random() * components.length);
    deck = randomIndex;
    return components[randomIndex];
  });

  // 3. Render the chosen component
  return (
    <div id='main' className='w-screen'>
        <div className='items-center justify-center'>
          <RandomComponent />
        </div>
    </div>
  );
};

export default SurveyPage;