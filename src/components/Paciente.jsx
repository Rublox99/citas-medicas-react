import {useEffect} from "react"

const Paciente= ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fechaAlta, sintomas, id}= paciente

    //SE EJECUTA UNA VEZ SE HAYA CARGADO UN ELEMENTO AL PROP paciente
    useEffect( () => {
       // console.log("El paciente se ha cargado al componente Paciente")
    }, [])

    const handleEliminar=() => {
        const respuesta= confirm("¿Deseas eliminar el paciente?");

        respuesta && eliminarPaciente(id)
    }

    return(
        <div className="bg-white shadow-md p-5 m-3 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Correo Electrónico: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {""}
                <span className="font-normal normal-case">{fechaAlta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-5">
                <button type="button" className="py-2 px-8 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                onClick={ () => setPaciente(paciente)}>
                    Editar
                </button>

                <button type="button" className="py-2 px-8 text-sm bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
   
        </div>
    )
}

export default Paciente