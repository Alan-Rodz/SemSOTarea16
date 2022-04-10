import { useState } from 'react';

import { Investigacion, investigaciones } from '../../info/investigaciones';
import { DatosInvestigacion } from './DatosInvestigacion'
import { ListaInvestigaciones } from './ListaInvestigaciones'

// ********************************************************************************
export const SeccionInvestigaciones = () => {
  // === State ====================================================================
  const [investigacionActiva, setInvestigacionActiva] = useState<Investigacion>(investigaciones[0]);
  
  // === UI =======================================================================
  return (
    <>
      <DatosInvestigacion investigacionActiva={investigacionActiva}/>
      <ListaInvestigaciones setInvestigacionActiva={setInvestigacionActiva}/>
    </>
  )
}