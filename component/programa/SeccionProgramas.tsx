import { useState } from 'react';

import { Programa, programas } from '../../info/programa/programas';
import { DatosPrograma } from './DatosPrograma'
import { ListaProgramas } from './ListaProgramas'

// ********************************************************************************
export const SeccionProgramas = () => {
  // === State ====================================================================
  const [programaActivo, setProgramaActivo] = useState<Programa>(programas[0]);
  
  // === UI =======================================================================
  return (
    <>
      <DatosPrograma programaActivo={programaActivo}/>
      <ListaProgramas setProgramaActivo={setProgramaActivo}/>
    </>
  )
}