import { Box, Flex } from '@chakra-ui/react';

import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../../pages';

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
          <Box
            bgColor={GLOBAL_COLOR}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={1}
            width={'100%'}
            textAlign={'center'}
          >
            Portafolio de Trabajos de Seminario de Solución de Problemas de  Sistemas Operativos
          </Box>
        </Box>
        <Box
          mt={'5%'}
          ml={'15%'}
          bgColor={GLOBAL_SECONDARY_COLOR}
          width={'70%'}
          padding={5}
          fontSize={15}
          borderRadius={GLOBAL_BORDER_RADIUS}
        >
          <Box
            bgColor={GLOBAL_COLOR}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={1}
            width={'100%'}
            textAlign={'center'}
          >
            Maestra Violeta del Rocío Becerra Velázquez
          </Box>
        </Box>
        <Box
          mt={'5%'}
          ml={'15%'}
          bgColor={GLOBAL_SECONDARY_COLOR}
          width={'70%'}
          padding={5}
          fontSize={15}
          borderRadius={GLOBAL_BORDER_RADIUS}
        >
          <Flex flexDir={'column'}>
            <Box
              fontSize={15}
              bgColor={GLOBAL_COLOR}
              borderRadius={GLOBAL_BORDER_RADIUS}
              padding={1}
              width={'100%'}
              textAlign={'center'}
            >
              Sección D01 - NRC 103844
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}