import Paciente from "./Paciente"
import { useEffect } from "react"

const ListadoPacientes= ({pacientes, setPaciente, eliminarPaciente}) => {

    useEffect( () => {
        if (pacientes.length>0){
            console.log("Nuevo paciente")
        }
    }, [pacientes])

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                        <h2 className="font-black text-2xl text-center mt-5">
                            Listado de Pacientes
                        </h2>
            
                        <p className="text-base mb-3 mt-3 text-center">
                            Administra tus {""}
                            <span className="text-indigo-600 font-bold">pacientes y citas</span>
                        </p>
            
                        {/*{} PARA FUNCIONES U OBJETOS; () PARA CONTENIDO HTML*/}
                        {/*POR CADA ELEMENTO EN UN .map, DEBE CREARSE UNA KEY ÚNICA; EN ESTE CASO EL ÍNDICE DEL ARREGLO DE PACIENTES*/}
                        {pacientes.map( paciente => (
                            <Paciente
                                key= {paciente.id}
                                paciente= {paciente}
                                setPaciente= {setPaciente}
                                eliminarPaciente= {eliminarPaciente}
                            />
                        ))}
                </>
            ) : (
                <>
                        <h2 className="font-black text-2xl text-center mt-5">
                            No hay pacientes
                        </h2>
            
                        <p className="text-base mb-3 mt-3 text-center">
                            Comienza agregando{" "}
                            <span className="text-indigo-600 font-bold">pacientes y aparecerán en este lugar</span>
                        </p>
                </>
            )}            

        </div>
    )
}

export default ListadoPacientes