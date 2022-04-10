import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DatosAlumno } from '../component/general/DatosAlumno';
import { DatosMateria } from '../component/general/DatosMateria';
import { NavBar } from '../component/general/NavBar';
import { DatosInvestigacion } from '../component/investigacion/DatosInvestigacion';
import { ListaInvestigaciones } from '../component/investigacion/ListaInvestigaciones';

// ********************************************************************************
export const GLOBAL_COLOR = '#caf0f8';
export const GLOBAL_SECONDARY_COLOR = '#48cae4';
export const GLOBAL_THIRD_COLOR = '#023e8a';
export const GLOBAL_BORDER_RADIUS = 10;
export const GLOBAL_PADDING = 5;

// === Component ================================================================== 
const Home: NextPage = () => {
  // === State ====================================================================
  const [mostrarInvestigaciones, setMostrarInvestigaciones] = useState(false);
  const [mostrarProgramas, setMostrarProgramas] = useState(false);
  const [mostrarAcercaDe, setMostrarAcercaDe] = useState(true);
  
  // === Effects ==================================================================
  useEffect(() => {
    if(mostrarInvestigaciones) {
      setMostrarProgramas(false);
      setMostrarAcercaDe(false);
    }
  }, [mostrarInvestigaciones]);
  
  useEffect(() => {
    if(mostrarProgramas) {
      setMostrarInvestigaciones(false);
      setMostrarAcercaDe(false);
    }
  }, [mostrarProgramas]);

  useEffect(() => {
    if(mostrarAcercaDe) {
      setMostrarInvestigaciones(false);
      setMostrarProgramas(false);
    }
  }, [mostrarAcercaDe]);

  // === UI =======================================================================
  return (
    <Box bgColor={GLOBAL_THIRD_COLOR}>
      <NavBar setMostrarInvestigaciones={setMostrarInvestigaciones} setMostrarProgramas={setMostrarProgramas} setMostrarAcercaDe={setMostrarAcercaDe} />
      <Box
        mt={1}
        bgColor={GLOBAL_COLOR}
        width={'100%'}
        height={'100%'}
      >
        { mostrarInvestigaciones &&
          <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
            <DatosInvestigacion/>
            <ListaInvestigaciones/>
          </Flex>
        }
        { mostrarProgramas &&
          <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
          </Flex>
        }
        { mostrarAcercaDe &&
          <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
            <DatosMateria />
            <DatosAlumno />
          </Flex>
        }
      </Box>
    </Box>
  )
}

export default Home
