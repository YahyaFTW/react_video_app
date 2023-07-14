import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Button,
  VStack,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <>
      <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
              Subscribe to get updates
            </Heading>

            <HStack borderBottom={'2px solid white'}>
              <Input
                placeholder={'Enter email here..'}
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor={'none'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Candid TV
            </Heading>
            <Text>All rights recieved.</Text>
          </VStack>

          <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>Social media</Heading>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <a href="https://www.linkedin.com/in/syed-yahya-ahmad-601b2a1b3/" target={'blank'}>Linkedin</a>
            </Button>

            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <a href="https://www.linkedin.com/in/syed-yahya-ahmad-601b2a1b3/" target={'blank'}>GitHub</a>
            </Button>

            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <a href="https://www.linkedin.com/in/syed-yahya-ahmad-601b2a1b3/" target={'blank'}>Twitter</a>
            </Button>

          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
