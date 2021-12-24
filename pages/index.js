import {
    Container,
    Button,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a software engineer based in Ireland!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Jake Grogan
                        </Heading>
                        <p>Software / Music</p>
                    </Box>
                    <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                    >
                        <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profile.png"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        I&apos;m Jake Grogan, a DCU computer science graduate from Dublin, Ireland. I&apos;m currently working as a software engineer at{' '}<Link href="https://www.evervault.com">Evervault</Link>.
                        I&apos;m working as part of a small, yet growing team, building software that makes it easy for developers to encrypt & process sensitive data without it touching your app in plaintext!
                        I&apos;m also a certified AWS Solutions Architect! My interests lie in distributed systems, cloud computing, and building great, customer focused solutions! Doing a lot of music in my spare time.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" >
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Interned on a scholarship with Liberty Information Technology as a Software Engineering Intern.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Completed my AWS Certified Solutions Architect (Associate) exam to become a certified AWS Solutions Architect.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed a six month internship at Amazon Web Services as a Software Development Engineer Intern on the DynamoDB team.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Published a research paper - &quot;A Multivocal Literature Review of Function-as-a-Service (FaaS) Infrastructures and Implications for Software Developers.&quot; - in Springer for EuroSPI 2020. DOI: <Link href="https://doi.org/10.1007/978-3-030-56441-4_5" target="_blank">10.1007/978-3-030-56441-4_5</Link>
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Graduated with a Bsc(Hons). Computer Applications from Dublin City University.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020 - 2021 (14 months)</BioYear>
                        Worked at Amazon Web Services as a Software Development Engineer working on the DynamoDB team.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - Present</BioYear>
                        Currently working at Evervault, a startup company in Dublin working on encryption technology.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page