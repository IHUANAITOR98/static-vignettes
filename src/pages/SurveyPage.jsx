// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import Control from '../components/Control.jsx';
// import Deck1 from '../components/Deck1.jsx';
// import Deck2 from '../components/Deck2.jsx';
// import Deck3 from '../components/Deck3.jsx';

// const SurveyPage = () => {
//   const navigate = useNavigate();

//   const components = [Deck1, Deck2, Deck3];
//   let deck = 0;

//   // 2. Select a random index on initialization
//   const [RandomComponent] = useState(() => {
//     const randomIndex = Math.floor(Math.random() * components.length);
//     deck = randomIndex;
//     return components[randomIndex];
//   });

//   // 3. Render the chosen component
//   return (
//     <div id='main' className='w-screen'>
//       <form onSubmit={ () => navigate("/survey") }> 
        
//         <div className="items-center justify-center w-screen">
//           <Control />
//         </div>

//         <div className='h-12 w-screen'></div>
        
//         <div className='items-center justify-center'>
//           <RandomComponent />
//         </div>

//         <div className="items-center justify-center w-screen">
//             <div className="w-screen bg-green-200 p-12">
//                 <div className="items-center justify-center rounded-box w-15/18 bg-white p-7">
//                     <button type='submit' className='btn-wide btn-primary bg-gray-300 h-12'>Enviar</button>
//                 </div>
//             </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SurveyPage;


import { useEffect } from 'react';

// Pega aquí las ligas de tus 3 cuestionarios de Google Forms
const FORMS = [
  'https://docs.google.com/forms/d/e/1FAIpQLSfrRcNXhXMRedgEWA1QhS9opgd91jnorJ4OI2qsZUwpp2ctkg/viewform?usp=dialog',
  'https://docs.google.com/forms/d/e/1FAIpQLSfMv9O_3zG6YqUtA2tyQKvrAfno38tDeT3yqmwqZboQrtY4Fw/viewform?usp=dialog',
  'https://docs.google.com/forms/d/e/1FAIpQLSfCcJoAr7lhEi04TeeBgSQuV3uQSrSU_KTKMHu7dsL79Pwl7Q/viewform?usp=dialog',
];

const SurveyPage = () => {
  useEffect(() => {
    // Si la persona ya tenía un cuestionario asignado, se queda con el mismo
    let indice = Number(localStorage.getItem('cuestionarioAsignado'));
    if (!(indice >= 0 && indice < FORMS.length) || localStorage.getItem('cuestionarioAsignado') === null) {
      indice = Math.floor(Math.random() * FORMS.length);
      localStorage.setItem('cuestionarioAsignado', String(indice));
    }
    console.log(indice)
    // replace() para que el botón "atrás" no regrese a esta página y vuelva a redirigir
    window.location.replace(FORMS[indice]);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-black">Redirigiendo al cuestionario...</p>
    </div>
  );
};

export default SurveyPage;

