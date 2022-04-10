import { Box, Center, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { GLOBAL_BORDER_RADIUS, GLOBAL_COLOR, GLOBAL_SECONDARY_COLOR } from '../pages';

// ********************************************************************************
export const NavBar = () => {
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
          >
            <Link href={'/investigaciones/'}>
              Investigaciones
            </Link>
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
          >
            <Link href={'/programas/'}>
              Programas
            </Link>
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
          >
            <Link href={'/acercade/'}>
              Acerca De
            </Link>
          </Box>
        </Center>
      </Box>
    </Flex>
  )
}