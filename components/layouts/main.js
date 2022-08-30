import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children }) => {
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