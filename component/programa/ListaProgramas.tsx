import { Box, Flex } from '@chakra-ui/react';
import { SetStateAction } from 'react';

import { programas, Programa } from '../../info/programa/programas';
import { GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS } from '../../pages'

// ********************************************************************************
interface Props {setProgramaActivo: React.Dispatch<SetStateAction<Programa>> }
export const ListaProgramas: React.FC<Props> = ({setProgramaActivo}) => {
  return (
    <Box
      flexBasis={'100%'}
      bgColor={GLOBAL_COLOR}
      height={'100vh'}
      overflowY={'scroll'}
    >
      <Flex flexDir={'column'}>
        {
          programas.map((programa, index) => (
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
                  onClick={()=>setProgramaActivo(programa)}
                >
                  {`${programa.numeroDeTarea}. ${programa.nombre}`}
                </Box>
              </Flex>
            </Box>
          ))
        }
      </Flex>
    </Box>)
}