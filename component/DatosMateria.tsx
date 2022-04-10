import { Box, Flex } from '@chakra-ui/react';

import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../pages';

// ********************************************************************************
export const DatosMateria = () => {
  return (
    <Box
      flexBasis={'100%'}
      bgColor={GLOBAL_COLOR}
      height={'100vh'}
    >
      <Flex flexDir={'column'}>
        <Box
          mt={'15%'}
          ml={'15%'}
          bgColor={GLOBAL_SECONDARY_COLOR}
          width={'70%'}
          padding={5}
          fontSize={15}
          borderRadius={GLOBAL_BORDER_RADIUS}
        >
          Portafolio de Trabajos de Seminario de Solución de Problemas de  Sistemas Operativos
        </Box>
        <Box
          mt={'15%'}
          ml={'15%'}
          bgColor={GLOBAL_SECONDARY_COLOR}
          width={'70%'}
          padding={5}
          fontSize={15}
          borderRadius={GLOBAL_BORDER_RADIUS}
        >
          Maestra Violeta del Rocío Becerra Velázquez
        </Box>
        <Box
          mt={'15%'}
          ml={'15%'}
          bgColor={GLOBAL_SECONDARY_COLOR}
          width={'70%'}
          padding={5}
          fontSize={15}
          borderRadius={GLOBAL_BORDER_RADIUS}
        >
          <Flex flexDir={'column'}>
            <Box fontSize={15}>
              Sección D01
            </Box>
            <Box fontSize={15}>
              NRC 103844
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}