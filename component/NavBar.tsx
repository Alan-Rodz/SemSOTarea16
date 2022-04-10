import { SetStateAction } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { GLOBAL_BORDER_RADIUS, GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR } from '../pages';

// ********************************************************************************
interface Props {
  setMostrarInvestigaciones: React.Dispatch<SetStateAction<boolean>>;
  setMostrarProgramas: React.Dispatch<SetStateAction<boolean>>
  setMostrarAcercaDe: React.Dispatch<SetStateAction<boolean>>
}
export const NavBar: React.FC<Props> = ({setMostrarInvestigaciones, setMostrarProgramas, setMostrarAcercaDe}) => {
  return (
    <Flex bgColor={GLOBAL_COLOR} padding={5} gap={2}>
      <Box
        flexBasis={'100%'}
        bgColor={GLOBAL_SECONDARY_COLOR}
        padding={3}
        borderRadius={GLOBAL_BORDER_RADIUS}
      >
        <Center>
          <Box
            _hover={{ color: 'white', cursor: 'pointer' }}
            onClick={()=>setMostrarInvestigaciones(mostrarInvestigaciones => !mostrarInvestigaciones)}
            >
            Investigaciones
          </Box>
        </Center>
      </Box>
      <Box
        flexBasis={'100%'}
        bgColor={GLOBAL_SECONDARY_COLOR}
        padding={3}
        borderRadius={GLOBAL_BORDER_RADIUS}
        >
        <Center>
          <Box
            _hover={{ color: 'white', cursor: 'pointer' }}
            onClick={()=>setMostrarProgramas(mostrarProgramas => !mostrarProgramas)}
            >
            Programas
          </Box>
        </Center>
      </Box>
      <Box
        flexBasis={'100%'}
        bgColor={GLOBAL_SECONDARY_COLOR}
        padding={3}
        borderRadius={GLOBAL_BORDER_RADIUS}
        >
        <Center>
          <Box
            _hover={{ color: 'white', cursor: 'pointer' }}
            onClick={()=>setMostrarAcercaDe(mostrarAcercasetMostrarAcercaDe => !mostrarAcercasetMostrarAcercaDe)}
          >
            Acerca De
          </Box>
        </Center>
      </Box>
    </Flex>
  )
}