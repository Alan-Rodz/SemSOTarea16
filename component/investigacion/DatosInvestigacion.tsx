import { Box, Flex } from '@chakra-ui/react';

import { Investigacion } from '../../info/investigaciones';
import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../../pages';

// ********************************************************************************
interface Props { investigacionActiva: Investigacion }
export const DatosInvestigacion: React.FC<Props> = ({ investigacionActiva }) => {
  return (
    <Box
      flexBasis={'100%'}
      bgColor={GLOBAL_COLOR}
      height={'100vh'}
    >
      <Flex flexDir={'column'}>
        <Box
          mt={'1%'}
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
          >
            {investigacionActiva.nombre}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}