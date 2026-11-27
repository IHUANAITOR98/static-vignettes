import { PieChart } from '@mui/x-charts/PieChart';

const Vignette12 = () => {
    return( 
        <div className="bg-blue-300 w-screen p-12">
            <div className=" items-center justify-center bg-white rounded-box p-7">
                <p className='text-primary-content'>
                    Para esta ocasión calculas los siguientes indicadores que te ayudarán a tomar una decisión 
                </p>
                <ul className='list-disc list-inside text-black'>
                    <li>Competencia: en el mapa de puestos observas que hay un puesto ocupado a la redonda</li>
                    <li>Esfuerzo: calculas que esta vez tendras que dedicarle 12 horas diarias a actividades del puesto</li>
                    <li>Ingresos: para esta ocasión calculas que del 100% de tus ingresos 33% serán gastos y 67% ganancias</li>
                </ul>
                <p className='text-primary-content'>
                    Después de leer los indicadores, ¿decides poner el puesto, o no? 
                </p>
            </div>
            
            <div className='h-16 w-screen'>
                <p className="text-center font-bold text-black p-4">
                    Pregunta 2
                </p>
            </div>

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
                            <td className=" border border-slate-900 bg-gray-500 text-black">
                                Vacio
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
                            <td className=" border border-slate-900 bg-gray-500 text-black">
                                Vacio
                            </td>
                            <td className='border border-slate-900 text-white'>
                                12
                            </td>
                            <td className="border border-slate-900  bg-green-400 text-black">
                                Tu Puesto
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
                            <td className=" border border-slate-900 bg-gray-500 text-black">
                                Vacio
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
                        <BarChart
                            xAxis={[{ data: ['Gastos', 'Ganancias'] }]}
                            series={[{ data: [33,67] } ]}
                            height={200}
                        />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='text-center'>
                        <p className='font-bold text-lg text-black'>Horas del día destinadas al negocio</p>
                        <progress className="progress progress-success h-12 w-80" value={50} max={100}></progress>
                        <p className='italic text-black'>12 horas || 12 horas</p>
                        <progress className="progress progress-success h-12 w-80" value={50} max={100}></progress>
                        <p className='italic text-black'>12 horas || 12 horas</p>
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

export default Vignette12;