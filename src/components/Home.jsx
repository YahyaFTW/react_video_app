import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  textTransform: 'upperCase',
  transform: 'translate(-50%,-50%)',
  p: '4',
  size: ['2xl','4xl'],
};
const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />

        <Container minH={'100vh'} maxW={'container.xl'} p="16">
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >
            Services
          </Heading>

          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img5}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
            />

            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              dolore delectus veniam harum ex quaerat dolores pariatur soluta
              incidunt accusamus ipsum eos tempora inventore illo expedita,
              aspernatur, quidem, autem dicta. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Adipisci dolore delectus veniam
              harum ex quaerat dolores pariatur soluta incidunt accusamus ipsum
              eos tempora inventore illo expedita, aspernatur, quidem, autem
              dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci dolore delectus veniam harum ex quaerat dolores pariatur
              soluta incidunt accusamus ipsum eos tempora inventore illo
              expedita, aspernatur, quidem, autem dicta. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Adipisci dolore delectus veniam
              harum ex quaerat dolores pariatur soluta incidunt accusamus ipsum
              eos tempora inventore illo expedita, aspernatur, quidem, autem
              dicta.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
const MyCarousel = () => (
  <>
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box h={['80vh', '100vh']} w={'full'}>
        <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>
          Experience the future
        </Heading>
      </Box>

      <Box h={['80vh', '100vh']} w={'full'}>
        <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

      <Box h={['80vh', '100vh']} w={'full'}>
        <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming is Cool
        </Heading>
      </Box>

      <Box h={['80vh', '100vh']} w={'full'}>
        <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Cool is Night
        </Heading>
      </Box>
    </Carousel>
  </>
);
export default Home;
