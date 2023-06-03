import {useState, useEffect} from "react"
import Error from "./Error";

//LOS ELEMENTOS DESTRUCTURADOS SON LOS PROPS QUE SE HICIERON EN App.jsx
const Formulario= ({setPacientes, pacientes, paciente, setPaciente}) => {
    {/*SINTAXIS DE useState; 
    [<Variable a tratar>, <funcion modificadora de la varibale>]= <asignación inicial de la variable>*/}
    const [nombre, setNombre]= useState(""); 
    const [propietario, setPropietario]= useState(""); 
    const [email, setEmail]= useState(""); 
    const [fechaAlta, setFechaAlta]= useState(""); 
    const [sintomas, setSintomas]= useState(""); 

    const [error, setError]= useState(false);

    //LAS DEPENDENCIAS SON LAS QUE REVISA SI CAMBIAN PARA RE-RENDERIZAR; en este caso cuando <paciente> cambia
    //hay otro ejemplo en Paciente.jsx
    useEffect( () => {
        if ( (Object.keys(paciente).length>0 ) ){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFechaAlta(paciente.fechaAlta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);

    const generarId = () =>{
        const random= Math.random().toString(36).substr(2);
        const fecha= Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault(); {/*EVITA SE ENVÍE EL FORM PARA TEMAS DE TESTEO*/}

        {/*VALIDACIÓN DEL FORMULARIO*/}
        if([nombre, propietario, email, fechaAlta, sintomas].includes("")){
            setError(true);
        } else {
            setError(false);

            {/*CREACION DE UN OBJETO PACIENTE PARA PASARLE AL STATE PACIENTES DE app.jsx*/}
            const objetoPaciente= {
                nombre,
                propietario,
                email,
                fechaAlta,
                sintomas //el id se cambió de línea para que se generase solo cuando hay nuevo registro (abajo)
            }

            //                                             EDITAR
            if(paciente.id){
                //EDITANDO EL REGISTRO
                objetoPaciente.id= paciente.id
                //console.log(objetoPaciente) //el objeto que se registra con los states iniciales
                //console.log(paciente) //el objeto cargado a memoria con el botón editar

                /*crea un arreglo para recorrer el arreglo de pacientes cargados en el state de App.jsx para encontrar el 
                que se está editando (el cargado en memoria con botón editar) y retornar el creado*/
                const pacientesActualizados= pacientes.map( pacienteCargado => 
                    pacienteCargado.id === paciente.id ? objetoPaciente : pacienteCargado)
                
                setPacientes(pacientesActualizados)
                setPaciente({}) //LIMPIA EL STATE CARGADO CON editar PARA NO CARGAR LA MEMORIA

            } else {
                //NUEVO REGISTRO DE PACIENTE
                objetoPaciente.id= generarId();
                setPacientes([...pacientes, objetoPaciente])
            }

            /*MODO ADECUADO: Se obtiene lo que ya tenía pacientes, y se le agrega el nuevo objeto, modificando el state
            pacientes pero mediante el método setPacientes*/
            //setPacientes([...pacientes, objetoPaciente]);

         
            //Reinicio del Form a su State Inicial
            setNombre("")
            setPropietario("")
            setEmail("")
            setFechaAlta("")
            setSintomas("")
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5"> {/*md: pantalla pequeña; lg: pantalla grande*/}
            <h2 className="font-black text-2xl text-center mt-5">{/*texto cabecera de formulario*/}
                Seguimiento de Pacientes
            </h2>
            
            <p className="text-base mb-3 mt-3 text-center"> {/*texto debajo de cabecera e inputs*/}
                Añade pacientes y {""} 
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>

            {/*INICIO DEL FORMULARIO*/}
            <form action="Inputs de formulario" onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-md py-5 px-5 mx-5 mb-5">

                {/*ES EL EQUIVALENTE A UN TERNARIO, PERO SOLO CON EL LADO VERDADERO que devuelve un div*/}
                {error && (<Error mensaje="Todos los campos son obligatorios"/>)}
                
                <div className="mb-5 text-sm">{/*ESTE DIV CONTIENE LOS INPUTS CON SUS LABELS*/}

                    {/*htmlFor es para acceder a un input que tenga ese id al clickear el label*/}
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombreMascota">
                        Nombre de la mascota
                    </label>
                    <input className="w-full p-1 border-2 mt-2 placeholder-gray-600 rounded-md"
                    id="nombreMascota" type="text" placeholder="Michifus Ándale" 

                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value) }
                    />
                    {/*value y onChange PERMITEN LEER LOS INPUTS Y ALTERAR EL STATE DE LAS VARIABLES*/}
                    {/*onChange ES UN EVENTO DE REACT*/}

                </div>

                <div className="mb-5 text-sm">

                    {/*htmlFor es para acceder a un input que tenga ese id al clickear el label*/}
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombrePropietario">
                        Nombre del Propietario
                    </label>
                    <input className="w-full p-1 border-2 mt-2 placeholder-gray-600 rounded-md"
                    id="nombrePropietario" type="text" placeholder="Ruben Almendares"

                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value) }
                    />

                </div>

                <div className="mb-5 text-sm">

                    {/*htmlFor es para acceder a un input que tenga ese id al clickear el label*/}
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="emailPropietario">
                        email
                    </label>
                    <input className="w-full p-1 border-2 mt-2 placeholder-gray-600 rounded-md"
                    id="emailPropietario" type="email" placeholder="nombre@gmail.com" 

                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="mb-5 text-sm">

                    {/*htmlFor es para acceder a un input que tenga ese id al clickear el label*/}
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fechaAlta">
                        Fecha de Alta
                    </label>
                    <input className="w-full p-1 border-2 mt-2 placeholder-gray-600 rounded-md"
                    id="fechaAlta" type="date"

                    value={fechaAlta}
                    onChange={ (e) => setFechaAlta(e.target.value)}
                    />

                </div>

                <div className="mb-5 text-sm">

                    {/*htmlFor es para acceder a un input que tenga ese id al clickear el label*/}
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
                        Síntomas Presentados
                    </label>
                    <textarea className="w-full resize-none" id="sintomas" placeholder="Descripción de los síntomas"

                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value) }
                    />

                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer
                hover:bg-indigo-700 transition-all  text-sm"
                value={ paciente.id ? "Editar Paciente" : "Agregar Paciente" }
                />
            </form>
            
        </div>
    )
}

export default Formulario