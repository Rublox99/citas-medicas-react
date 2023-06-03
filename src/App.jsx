//SE TRABAJARÁ PRINCIPALMENTE EN ESTE ARCHIVO
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  {/*ARREGLO VACÍO INICIAL DE PACIENTES*/ }
    /*REVISA SI HAY ITEMS EN LOCALSTORAGE PARA RECUPERARLOS y si existe el item en LS para agregarlo al state inicial de pacientes JSON.parse convierte de string a arreglo*/
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  //GUARDAR LOS CAMBIOS HECHOS A LISTADO DE PACIENTES PARA AGREGARLOS COMO ITEM STRING EN LS
  useEffect(() => {
    //console.log("El listado de pacientes se alteró...")
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    //console.log(`Eliminando paciente ${id}`)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id) //RETORNA LOS DIFERENTES AL ID INGRESADO
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container-root mx-auto mt-5">

      {/*SINTAXIS PARA MOSTRAR ELEMENTOS IMPORTADOS*/}
      <Header />

      <div className="md:flex">
        <Formulario  //SINTAXIS PARA DEFINIR PROPS EN UN COMPONENTE
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
