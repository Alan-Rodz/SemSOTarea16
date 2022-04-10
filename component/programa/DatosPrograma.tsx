import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

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
            textAlign={'justify'}
          >
            {programaActivo.reseña}
          </Box>
        </Box>

        {/* Código */}
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
            textAlign={'justify'}
          >
            <Link href={programaActivo.githubLink} passHref>
              <ChakraLink isExternal>
                <Box borderRadius={GLOBAL_BORDER_RADIUS} padding={2}>
                  Código del Programa
                </Box>
              </ChakraLink>
            </Link>
          </Box>
        </Box>

        {/* PDF */}
        <Box height={'100%'} mt={2}>
          <object data={programaActivo.link} type={'application/pdf'} width={'100%'} height={'100%'} />
        </Box>

        {/* Video */}
        {
          programaActivo.numeroDeTarea !== 16/*ultima tarea no tiene video*/ &&
          <Box height={'100%'} mt={2}>
            <iframe src={programaActivo.ytLink}
              allow={'autoplay; encrypted-media'}
              title={'video'}
              allowFullScreen
              width={'100%'}
              height={'100%'}
            />
          </Box>
        }
      </Box>
    </Box>
  )
}