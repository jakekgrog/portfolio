import Head from 'next/head';
import { Box, Container, Icon, Heading, SimpleGrid, Link, Button } from '@chakra-ui/react';
import Section from '../section';
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5';
import Layout from '../layouts/article'

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jake Grogan - Home</title>
            </Head>

            <Container  maxW="container.xl" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main