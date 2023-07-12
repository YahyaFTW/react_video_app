import React from 'react'
import { Box, Image, Heading ,Container} from '@chakra-ui/react'
import { Carousel, } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: "absolute",
    left: "50%" ,
    top:"50%",
    textTransform:"upperCase",
    transform:"translate(-50%,-50%)",
    p:"4",
    size:"4xl"
}
const Home = () => {
    return (
        <>
            <Box>

                <MyCarousel />

                <Container minH={'100vh'} maxW={'container.xl'} p='16'>
                    
                </Container>
            </Box>
        </>
    )
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box h={'100vh'} w={'full'} >
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.700"} color={"white"} {...headingOptions} >Experience the future</Heading>
        </Box>

        <Box h={'100vh'} w={'full'}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>Future is Gaming</Heading>
        </Box>

        <Box h={'100vh'} w={'full'}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming is Cool</Heading>
        </Box>

        <Box h={'100vh'} w={'full'}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Cool is Night</Heading>
        </Box>
    </Carousel>
);
export default Home
