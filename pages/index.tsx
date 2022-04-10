import { Box, Center, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import { DatosAlumno } from '../component/DatosAlumno';
import { DatosMateria } from '../component/DatosMateria';
import { NavBar } from '../component/NavBar';

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
  const [mostrarAcercaDe, setMostrarAcercaDe] = useState(false);
  
  // === UI =======================================================================
  return (
    <Box bgColor={GLOBAL_THIRD_COLOR}>
      <NavBar setMostrarInvestigaciones={setMostrarInvestigaciones} setMostrarProgramas={setMostrarProgramas} setMostrarAcercaDe={setMostrarAcercaDe}/>
      <Box
        mt={1}
        bgColor={GLOBAL_COLOR}
        width={'100%'}
        height={'100%'}
      >
        <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
          <DatosMateria />
          <DatosAlumno/>
        </Flex>
      </Box>
    </Box>
  )
}

export default Home
