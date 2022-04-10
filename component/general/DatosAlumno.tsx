import { Box, Center, Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS, GLOBAL_THIRD_COLOR } from '../../pages';

// ********************************************************************************
export const DatosAlumno = () => {
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
          <Flex gap={2}>
            <Center>
              <Link href={'https://www.linkedin.com/in/alan-rodriguez-16b074192/'} passHref>
                <ChakraLink isExternal>
                  <Box backgroundColor={'blue.500'} borderRadius={GLOBAL_BORDER_RADIUS} padding={2}>
                    <AiFillLinkedin color={'white'} />
                  </Box>
                </ChakraLink>
              </Link>

              <Link href={'https://github.com/Alan-Rodz'} passHref>
                <ChakraLink isExternal>
                  <Box backgroundColor={'blue.500'} borderRadius={GLOBAL_BORDER_RADIUS} padding={2} ml={2}>
                    <AiFillGithub color={'white'} />
                  </Box>
                </ChakraLink>
              </Link>
              <Box
                bgColor={GLOBAL_COLOR}
                borderRadius={GLOBAL_BORDER_RADIUS}
                padding={1}
                ml={2}
              >
                Alan Ramiro Rodríguez González
              </Box>
            </Center>
          </Flex>
        </Box>

        <Box
          mt={'15%'}
          ml={'15%'}
          bgColor={GLOBAL_SECONDARY_COLOR}
          width={'70%'}
          padding={5}
          fontSize={15}
          borderRadius={GLOBAL_BORDER_RADIUS}
          textAlign={'justify'}
        >
          <Box
            bgColor={GLOBAL_COLOR}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={1}
            width={'100%'}
            textAlign={'justify'}
          >
            Conclusión Final: En general considero que las últimas actividades del curso tienen una complejidad innecesaria para
            la cantidad de puntos que valen. Por dicha razón he optado por no hacerlas, ya que la cantidad de tiempo que se requiere
            para llevarlas a cabo no corresponde, en mi opinión, al puntaje que otorgan hacia la calificación final. Más allá de eso los
            temas vistos me parecen apropiados.
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}