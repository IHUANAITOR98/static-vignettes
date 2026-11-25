import { PieChart } from '@mui/x-charts/PieChart';

const Vignette19 = () => {
    return( 
        <div className="bg-yellow-700 w-screen p-12">
            <p className='text-primary-content'>Suponga que se le presenta la oportunidad de emprender en un negocio propio que cuenta 
                con estas caracteristicas: </p>
            <ul className='list-disc list-inside text-black'>
                <li>Por cada peso invertido recibes un peso de ganancia</li>
                <li>Solo tienes un competidor a la redonda</li>
                <li>El tiempo que debes invertir al día son 12 horas en total</li>
            </ul>
            
            <div className="flex flex-wrap items-center justify-center bg-white rounded-box p-7">
                <div className='text-center flex-wrap w-3/4'>
                    <p className='font-bold text-lg text-black'>Mapa de negocios a la redonda</p>
                    <table className="table-fixed w-full">
                    <tbody>
                        <tr>
                            <td className=" border border-slate-900 text-white">
                                1
                            </td>
                            <td className=" border border-slate-900 text-white">
                                2
                            </td>
                            <td className=" border border-slate-900 text-white">
                                3
                            </td>
                            <td className=" border border-slate-900 text-white">
                                4
                            </td>
                            <td className="border border-slate-900 text-white">
                                5
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-900 text-white">
                                6
                            </td>
                            <td className="border border-slate-900 text-white">
                                7
                            </td>
                            <td className="border border-slate-900 text-white">
                                8
                            </td>
                            <td className="border border-slate-900 text-white">
                                9
                            </td>
                            <td className="border border-slate-900 text-white">
                                10
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-slate-900 bg-red-500 text-black'>
                                Competencia
                            </td>
                            <td className='border border-slate-900 text-white'>
                                12
                            </td>
                            <td className="border border-slate-900 bg-green-400 text-black">
                                Su Negocio
                            </td>
                            <td className="border border-slate-900 text-white">
                                14
                            </td>
                            <td className="border border-slate-900 bg-red-500 text-black">
                                Competencia
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-slate-900 text-white'>
                                16
                            </td>
                            <td className='border border-slate-900 text-white'>
                                17
                            </td>
                            <td className="border border-slate-900 text-white">
                                18
                            </td>
                            <td className="border border-slate-900 text-white">
                                19
                            </td>
                            <td className="border border-slate-900 text-white">
                                20
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-slate-900 text-white'>
                                21
                            </td>
                            <td className='border border-slate-900 text-white'>
                                22
                            </td>
                            <td className="border border-slate-900 text-white">
                                23
                            </td>
                            <td className="border border-slate-900 text-white">
                                24
                            </td>
                            <td className="border border-slate-900 text-white">
                                25
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className='h-16 w-screen'></div>
                <div className='w-1/2'>
                    <div className='text-center flex-wrap'>
                        <p className='font-bold text-lg text-black'>Destino del dinero ingresado</p>
                        <PieChart series={[
                    {
                        data: [
                            { id: 0, value: 33, label: 'Ganancias' },
                            { id: 1, value: 66, label: 'Gastos' },
                        ],
                        cx: 100,
                        cy: 100,
                        },
                    ]}
                    width={200}
                    height={200}
                    />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='text-center'>
                        <p className='font-bold text-lg text-black'>Horas del día destinadas al negocio</p>
                        <progress className="progress progress-success h-12 w-80" value={33} max={100}></progress>
                        <p className='italic text-black'>8 horas || 16 horas</p>
                    </div>
                </div>
            </div>
            <div className='h-16 w-screen'></div>
            <div className="flex flex-wrap items-center justify-center space-x-3 bg-white rounded-box p-7">
                 <p className='font-bold text-black w-1/2'>¿Emprendería en este negocio?</p> 
                 <p className='italic text-black'>No</p>
                 <input type="checkbox" className="toggle checked:toggle-success checked:[--tglbg:green]" defaultChecked />
                 <p className='italic text-black'>Si</p>
            </div>
        </div>);
};

export default Vignette19;