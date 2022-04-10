import { Box } from '@chakra-ui/react';

import { Investigacion } from '../../info/investigacion/investigaciones';
import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../../pages';

// ********************************************************************************
interface Props { investigacionActiva: Investigacion }
export const DatosInvestigacion: React.FC<Props> = ({ investigacionActiva }) => {
  return (
    <Box
      flexBasis={'100%'}
      bgColor={GLOBAL_COLOR}
      height={'100vh'}
      overflow={'scroll'}
    >
      <Box flexDir={'column'} gap={2} margin={3} height={'100%'}>
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
            {investigacionActiva.nombre}
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
            {investigacionActiva.reseña}
          </Box>
        </Box>

        {/* PDF */}
        <Box height={'100%'} mt={2}>
          <object data={investigacionActiva.link} type={'application/pdf'} width={'100%'} height={'100%'} />
        </Box>
      </Box>
    </Box>
  )
}