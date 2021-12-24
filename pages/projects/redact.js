import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return (
        <Layout title="GhostDB">
            <Container>
                <Title>
                    Redact <Badge>2018</Badge>
                </Title>
                <P>
                    Native desktop application for easily redacting sensitive data in images
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/jakekgrog/redact" target="_blank">
                            https://github.com/jakekgrog/redact <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows / Linux / macOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Electron</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/redact2.png" atl="Redact" />
                <ProjectImage src="/images/redact.png" atl="Redact" />
            </Container>
        </Layout>
    )
}

export default Project