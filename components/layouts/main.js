import Head from 'next/head';
import Navbar from '../navbar';
import NoSsr from '../no-ssr';
import { Box, Container, Icon, Heading, SimpleGrid, Link, Button } from '@chakra-ui/react';
import VoxelComputer from '../voxel-computer';
import Section from '../section';
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5';
import Layout from '../layouts/article'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jake Grogan - Home</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelComputer />
                </NoSsr>
                {children}
                <Layout>
                    <Box
                      align="bottom"
                    >
                        <Container>
                            <Section delay={0.3}>
                                <Heading as="h3" variant="section-title">
                                    On the web
                                </Heading>
                                <SimpleGrid columns={[3, 3, 3]} gap={6}>
                                <Link href="https://github.com/jakekgrog" target="_blank">
                                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                                @jakekgrog
                                            </Button>
                                        </Link>
                                        <Link href="https://twitter.com/jakekgrog" target="_blank">
                                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                                @jakekgrog
                                            </Button>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/jakegrogan/" target="_blank">
                                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                                Jake Grogan
                                            </Button>
                                        </Link>
                                </SimpleGrid>
                            </Section>
                        </Container>
                    </Box>
                </Layout>
            </Container>

            
        </Box>
    )
}

export default Main