import { Box, Flex, Center } from '@chakra-ui/react';
import { SetStateAction } from 'react';
import { Investigacion, investigaciones } from '../../info/investigaciones';

import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../../pages'

// ********************************************************************************
interface Props {setInvestigacionActiva: React.Dispatch<SetStateAction<Investigacion>> }
export const ListaInvestigaciones: React.FC<Props> = ({setInvestigacionActiva}) => {
  return (
    <Box
      flexBasis={'100%'}
      bgColor={GLOBAL_COLOR}
      height={'100vh'}
      overflowY={'scroll'}
    >
      <Flex flexDir={'column'}>
        {
          investigaciones.map((investigacion, index) => (
            <Box
              key={index}
              mt={'5%'}
              ml={'15%'}
              bgColor={GLOBAL_SECONDARY_COLOR}
              width={'70%'}
              padding={5}
              fontSize={15}
              borderRadius={GLOBAL_BORDER_RADIUS}
            >
              <Flex gap={1}>
                <Box
                  bgColor={GLOBAL_COLOR}
                  borderRadius={GLOBAL_BORDER_RADIUS}
                  padding={1}
                  width={'100%'}
                  _hover={{cursor:'pointer', color:'blue'}}
                  onClick={()=>setInvestigacionActiva(investigacion)}
                >
                  {`${investigacion.numeroDeTarea}. ${investigacion.nombre}`}
                </Box>
              </Flex>
            </Box>
          ))
        }
      </Flex>
    </Box>)
}