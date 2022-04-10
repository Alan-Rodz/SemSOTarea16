import { Box, Flex } from '@chakra-ui/react';

import { Programa } from '../../info/programa/programas';
import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../../pages';

// ********************************************************************************
interface Props { programaActivo: Programa }
export const DatosPrograma: React.FC<Props> = ({ programaActivo }) => {
  return (
    <Box
      flexBasis={'100%'}
      bgColor={GLOBAL_COLOR}
      height={'100vh'}
      overflow={'scroll'}
    >
      <Flex flexDir={'column'} gap={2} margin={3} height={'100%'}>
        {/* Titulo */}
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
            {programaActivo.nombre}
          </Box>
        </Box>

        {/* Reseña */}
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
            textAlign={'justify'}
          >
            {programaActivo.reseña}
          </Box>
        </Box>

        {/* PDF */}
        <object data={programaActivo.link} type={'application/pdf'} width={'100%'} height={'100%'} />
      </Flex>
    </Box>
  )
}