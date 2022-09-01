import {
    Button,
    Box,
    Heading,
    Image,
    Link,
    Icon
} from '@chakra-ui/react';
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5';
import Layout from '../components/layouts/article'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return (
        <Layout>
            <div className="container">
                <div className='item'>
                    <Box
                      flexShrink={0}
                      mr={{ md: 10, sm: 10 }}
                      align="center"
                      className="pic-container"
                    >
                        <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={1}
                        borderStyle="solid"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profilepic.jpg"
                        className='pic'
                        />
                    </Box>
                </div>
                <div className='item'>
                    <Box display={{ md: 'flex' }} className="pic-container">
                        <Box flexGrow={1} >
                            <Heading as="h2" variant="page-title" className="title">
                            Software Engineer
                            </Heading>
                        </Box>
                    </Box>

                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Work
                        </Heading>
                        <Paragraph>
                            I&apos;m Jake Grogan, a DCU computer science graduate from Dublin, Ireland. I&apos;m currently working as a software engineer at{' '}<Link href="https://www.evervault.com">Evervault</Link>.
                            I&apos;m working as part of a small, yet growing team, building software that makes it easy for developers to encrypt & process sensitive data without it touching your app in plaintext!
                            I&apos;m also a certified AWS Solutions Architect! My interests lie in distributed systems, cloud computing, and building great, customer focused solutions! Doing some music in my spare time.
                        </Paragraph>
                    </Section>
                    
                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title" >
                            Bio
                        </Heading>
                        <BioSection>
                            <BioYear>2021 - Present</BioYear>
                            Currently working at Evervault, a startup company in Dublin working on encryption technology.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020 - 2021 (14 months)</BioYear>
                            Worked at Amazon Web Services as a Software Development Engineer working on the DynamoDB team.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Graduated with a Bsc(Hons). Computer Applications from Dublin City University.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Published a research paper - &quot;A Multivocal Literature Review of Function-as-a-Service (FaaS) Infrastructures and Implications for Software Developers.&quot; - in Springer for EuroSPI 2020. DOI: <Link href="https://doi.org/10.1007/978-3-030-56441-4_5" target="_blank">10.1007/978-3-030-56441-4_5</Link>
                        </BioSection>
                        <BioSection>
                            <BioYear>2019</BioYear>
                            Completed a six month internship at Amazon Web Services as a Software Development Engineer Intern on the DynamoDB team.
                        </BioSection>
                        <BioSection>
                            <BioYear>2018</BioYear>
                            Completed my AWS Certified Solutions Architect (Associate) exam to become a certified AWS Solutions Architect.
                        </BioSection>
                        <BioSection>
                            <BioYear>2017</BioYear>
                            Interned on a scholarship with Liberty Information Technology as a Software Engineering Intern.
                        </BioSection>
                        
                        
                        
                        
                        
                        
                    </Section>
                    <Box>
                            <Section delay={0.3}>
                                <Heading as="h3" variant="section-title">
                                    On the web
                                </Heading>
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
                            </Section>
                        </Box>
                </div>
            </div>
        </Layout>
    )
}

export default Page