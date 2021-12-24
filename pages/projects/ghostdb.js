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
                    GhostDB <Badge>2020</Badge>
                </Title>
                <P>
                    GhostDB is a distributed, in-memory, general purpose key-value data store that delivers microsecond performance at any scale.
                    GhostDB is designed to speed up dynamic database or API driven websites by storing data in RAM in order to reduce the number of times an external data source such as a database or API must be read. GhostDB provides a very large hash table that is distributed across multiple machines and stores large numbers of key-value pairs within the hash table.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ghostdbcache.com/" target="_blank">
                            https://ghostdbcache.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows / Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Golang</span>
                    </ListItem>
                    <ListItem>
                        <Meta>SDKs</Meta>
                        <span>Python, NodeJS, Java</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/ghostdb.png" atl="GhostDB" />
            </Container>
        </Layout>
    )
}

export default Project