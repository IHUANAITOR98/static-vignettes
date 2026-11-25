import { useState } from 'react';

const Control = () => {
    const [selectedAge, setSelectedAge] = useState(0);
    const [selectedGend, setSelectedGend] = useState(0);
    const [selectedExp, setSelectedExp] = useState(0);
    const [selectedJob, setSelectedJob] = useState('');



    return (
        <div className="items-center justify-center w-screen">
            <div className="w-screen bg-green-200 p-12">
                <div className="rounded-box w-15/18 bg-white p-7">
                    <label className="card-title items-center">
                        Seleccione un rango de edad:
                    </label>
                    <select id='Edad' value={selectedAge} 
                        onChange={(e) => setSelectedAge(e.target.value)} className="select bg-primary-content">
                        <option selected disabled>   </option>
                        <option value={1}>15 a 25</option>
                        <option value={2}>25 a 40</option>
                        <option value={3}>40 a 55</option>
                        <option value={4}>55 en adelante</option>
                    </select>
                    <label className="card-title items-center">
                        ¿Con que género se identifica?
                    </label>
                        <select id='Genero' value={selectedGend} 
                            onChange={(e) => setSelectedGend(e.target.value)} className="select bg-primary-content">
                        <option selected disabled>   </option>
                        <option value={1}>Mujer</option>
                        <option value={2}>Hombre</option>
                        <option value={3}>Ninguno</option>
                        <option value={4}>Prefiero no decir</option>
                    </select>
                    <label className="card-title items-center">
                        ¿Ha tenido experiencia emprendiendo?
                    </label>    
                    <select id="Experiencia" value={selectedExp} 
                        onChange={(e) => setSelectedExp(e.target.value)} className="select bg-primary-content">
                        <option selected disabled>   </option>
                        <option value={1}>Si</option>
                        <option value={2}>No</option>
                    </select>
                    
                    <label className="card-title items-center">
                        ¿Cuál es su ocupación actual?
                    </label>
                    <input type="text" minLength={10} maxLength={20} 
                        id='Ocupacion' value={selectedJob} 
                        onChange={(e) => setSelectedJob(e.target.value)}  
                        placeholder="Ocupación" className="w-full"/>
                        
                    <label />
                </div>
            </div>
        </div>
    );
}

export default Control;