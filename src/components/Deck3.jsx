import Vignette11 from "./vignettes3/Vignette301";
import Vignette12 from "./vignettes3/Vignette302";
import Vignette13 from "./vignettes3/Vignette303";
import Vignette14 from "./vignettes3/Vignette304";
import Vignette15 from "./vignettes3/Vignette305";
import Vignette16 from "./vignettes3/Vignette306";
import Vignette17 from "./vignettes3/Vignette307";
import Vignette18 from "./vignettes3/Vignette308";
import Vignette19 from "./vignettes3/Vignette309";
import Vignette210 from "./vignettes3/Vignette310";
import Vignette211 from "./vignettes3/Vignette311";


const Deck3 = () => {
    return(
        <div id="Deck" className="items-center justify-center w-screen">
            <div className='text-center flex-wrap w-screen bg-red-100'>
                <p className="font-bold text-black p-4">
                    Tipo de Cuestionario: 3
                </p>
            </div>
            <div className=" items-center justify-center bg-white  p-7">
                <h4 className='text-primary-content'>
                    -- Instrcucciones
                </h4>
                <p className='text-primary-content'>
                    A continuación van a aparecer 9 Viñetas diferentes, en cada una la situación es la misma: Te proponen 
                    la oportunidad de montar un puesto en un bazar. Para que puedas tomar la decisión de montar el puesto, o no,
                    tienes acceso a la información de las siguientes variables:
                </p>
                <ul className='list-disc list-inside text-black'>
                    <li>
                       COMPETENCIA: Tienes acceso a un mapa de los puestos que te rodean en el bazar, estos puestos pueden estar
                       ocupados o vacios.
                    </li>
                    <li>
                        ESFUERZO: Tienes acceso al estimado de horas diarias que vas a ocupar para hacer actividades relacionadas a tu 
                        puesto en el bazar.
                    </li>
                    <li>
                        DESTINO DEL INGRESO: Tienes acceso a una proyección de cuantas partes del dinero ingresado van destinados para 
                        gasto del puesto y cuantas partes se convertirán en ganancias.
                    </li>
                </ul>
            </div>
            <div className='h-12 w-screen'></div>
            <Vignette11 />
            <div className='h-12 w-screen'></div>
            <Vignette12 />
            <div className='h-12 w-screen'></div>
            <Vignette13 />
            <div className='h-12 w-screen'></div>
            <Vignette14 />
            <div className='h-12 w-screen'></div>
            <Vignette15 />
            <div className='h-12 w-screen'></div>
            <Vignette16 />
            <div className='h-12 w-screen'></div>
            <Vignette17 />
            <div className='h-12 w-screen'></div>
            <Vignette18 />
            <div className='h-12 w-screen'></div>
            <Vignette19 />
            <div className='h-12 w-screen'></div>
        </div>
    );
}

export default Deck3; 