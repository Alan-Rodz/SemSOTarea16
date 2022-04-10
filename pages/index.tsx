import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DatosAlumno } from '../component/general/DatosAlumno';
import { DatosMateria } from '../component/general/DatosMateria';
import { NavBar } from '../component/general/NavBar';
import { SeccionInvestigaciones } from '../component/investigacion/SeccionInvestigaciones';

// ********************************************************************************
export const GLOBAL_COLOR = '#caf0f8';
export const GLOBAL_SECONDARY_COLOR = '#48cae4';
export const GLOBAL_THIRD_COLOR = '#023e8a';
export const GLOBAL_BORDER_RADIUS = 10;
export const GLOBAL_PADDING = 5;

// === Component ================================================================== 
const Home: NextPage = () => {
  // === State ====================================================================
  const [seccionActual, setSeccionActual] = useState<'paginaPrincipal' | 'investigaciones' | 'programas'>('paginaPrincipal');

  // === UI =======================================================================
  return (
    <Box bgColor={GLOBAL_THIRD_COLOR}>
      <NavBar setSeccionActual={setSeccionActual} />
      <Box
        mt={1}
        bgColor={GLOBAL_COLOR}
        width={'100%'}
        height={'100%'}
      >
        {seccionActual === 'paginaPrincipal' &&
          <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
            <DatosMateria />
            <DatosAlumno />
          </Flex>
        }
        {seccionActual === 'investigaciones' &&
          <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
            <SeccionInvestigaciones />
          </Flex>
        }
        {seccionActual === 'programas' &&
          <Flex gap={1} backgroundColor={GLOBAL_THIRD_COLOR}>
          </Flex>
        }
      </Box>
    </Box>
  )
}

export default Home
