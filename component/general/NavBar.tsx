import { SetStateAction } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';

import { GLOBAL_BORDER_RADIUS, GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR } from '../../pages';

// ********************************************************************************
interface Props {
  setSeccionActual: React.Dispatch<SetStateAction<'paginaPrincipal' | 'investigaciones' | 'programas'>>
}
export const NavBar: React.FC<Props> = ({ setSeccionActual }) => {
  return (
    <Flex bgColor={GLOBAL_COLOR} padding={5} gap={2}>
      <Box
        flexBasis={'100%'}
        bgColor={GLOBAL_SECONDARY_COLOR}
        padding={3}
        borderRadius={GLOBAL_BORDER_RADIUS}
      >
        <Box
          onClick={() => setSeccionActual('paginaPrincipal')}
          padding={1}
          borderRadius={GLOBAL_BORDER_RADIUS}
          bgColor={GLOBAL_COLOR}
          _hover={{ cursor: 'pointer', color: 'blue' }}
          textAlign={'center'}
        >
          Inicio
        </Box>
      </Box>
      <Box
        flexBasis={'100%'}
        bgColor={GLOBAL_SECONDARY_COLOR}
        padding={3}
        borderRadius={GLOBAL_BORDER_RADIUS}
      >
        <Box
          onClick={() => setSeccionActual('investigaciones')}
          padding={1}
          borderRadius={GLOBAL_BORDER_RADIUS}
          bgColor={GLOBAL_COLOR}
          _hover={{ cursor: 'pointer', color: 'blue' }}
          textAlign={'center'}
        >
          Investigaciones
        </Box>
      </Box>
      <Box
        flexBasis={'100%'}
        bgColor={GLOBAL_SECONDARY_COLOR}
        padding={3}
        borderRadius={GLOBAL_BORDER_RADIUS}
      >
        <Box
          onClick={() => setSeccionActual('programas')}
          padding={1}
          borderRadius={GLOBAL_BORDER_RADIUS}
          bgColor={GLOBAL_COLOR}
          _hover={{ cursor: 'pointer', color: 'blue' }}
          textAlign={'center'}
        >
          Programas
        </Box>
      </Box>
    </Flex>
  )
}